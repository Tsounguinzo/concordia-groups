import {json} from "@sveltejs/kit";
import {courseToWhatsAppLink} from "$lib/courseToWhatsAppLink";
import NodeCache from "node-cache";


// Cache setup with a 1-week lifetime for course data.
const courseCache = new NodeCache({ stdTTL: 604800, checkperiod: 3600 });

export const GET = async () => {
    let coursesData: any[] = courseCache.get("coursesData") || [];

    if (!coursesData.length) {
        const before = performance.now();
        const headers = {
            'Authorization': `Basic ${btoa(`${import.meta.env.VITE_API_USER}:${import.meta.env.VITE_API_KEY}`)}`
        };
        const keys = Object.keys(courseToWhatsAppLink);
        const allPromises = [];
        const chunkSize = 50;

        // Split requests to mitigate API request limitations.
        for (let i = 0; i < keys.length; i += chunkSize) {
            const chunk = keys.slice(i, i + chunkSize);
            const chunkPromises = chunk.map(key => fetchCourseData(key, headers).catch(error => {
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
const fetchCourseData = async (key: string, headers: Record<string, string>) => {
    const [subject, catalog, career] = key.split('_');
    const courseURL = `https://opendata.concordia.ca/API/v1/course/catalog/filter/${subject}/${catalog}/${career}`;
    const course = await fetch(courseURL, { headers }).then(res => res.json());

    // Exit early if no course data found.
    if (!course.length) throw new Error(`No course found for key: ${key}`);

    const descriptionURL = `https://opendata.concordia.ca/API/v1/course/description/filter/${course[0].ID}`;
    const description = await fetch(descriptionURL, { headers }).then(res => res.json());

    return {
        ...course[0],
        description: description[0]?.description,
        whatsappLink: courseToWhatsAppLink[key as keyof typeof courseToWhatsAppLink]
    };
};