import {json} from "@sveltejs/kit";
import NodeCache from "node-cache";
import {CONCORDIA_API_KEY, CONCORDIA_API_USER} from "$env/static/private";
import {getAllCourses} from "$lib/apis/firebase";
import type {DocumentData} from "@firebase/firestore";


// Cache setup with a 1-week lifetime for the course data.
const courseCache = new NodeCache({ stdTTL: 604800, checkperiod: 3600 });

export const GET = async () => {
    let coursesData: any[] = courseCache.get("coursesData") || [];

    if (!coursesData.length) {
        const before = performance.now();
        const headers = {
            'Authorization': `Basic ${btoa(`${CONCORDIA_API_USER}:${CONCORDIA_API_KEY}`)}`
        };

        const allPromises = [];
        const chunkSize = 50;
       // const courses = await getAllCourses()

        // Split requests to mitigate API request limitations.
        for (let i = 0; i < courses.length; i += chunkSize) {
            const chunk = courses.slice(i, i + chunkSize);
            const chunkPromises = chunk.map(key => fetchCourseData(key, headers).catch(() => {
                return null;  // null indicates a failed fetch
            }));

            allPromises.push(...chunkPromises);
        }

        // Filter out failed fetch attempts.
        coursesData = (await Promise.all(allPromises)).filter(Boolean);
        courseCache.set("coursesData", coursesData);
        const after = performance.now();
        console.log(`${coursesData.length} Courses loaded in ${(after - before) / 1000} seconds.`);
    }

	return json({
		courses: coursesData
	});
};

// Fetch course and description
const fetchCourseData = async (courseData: DocumentData, headers: Record<string, string>) => {
    let subject = courseData.CourseName.Subject;
    let catalog = courseData.CourseName.Catalog;
    const courseURL = `https://opendata.concordia.ca/API/v1/course/catalog/filter/${subject}/${catalog}/UGRD`;
    const course = await fetch(courseURL, { headers }).then(res => res.json());

    // Exit early if no course data found.
    if (!course.length) throw new Error(`No course found for: ${subject} ${catalog}`);

    const descriptionURL = `https://opendata.concordia.ca/API/v1/course/description/filter/${course[0].ID}`;
    const description = await fetch(descriptionURL, { headers }).then(res => res.json());

    return {
        ...course[0],
        description: description[0]?.description,
        whatsappLink: courseData.WhatsappLink
    };
};