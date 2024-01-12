import {json} from "@sveltejs/kit";
import {coursesAndThierLinks} from "$lib/stores";
import NodeCache from "node-cache";
import {CONCORDIA_API_KEY, CONCORDIA_API_USER} from "$env/static/private";


// Cache setup with a 1-week lifetime for the course data.
const courseCache = new NodeCache({ stdTTL: 604800, checkperiod: 3600 });

export const GET = async () => {
    let coursesData: any[] = courseCache.get("coursesData") || [];

    if (!coursesData.length) {
        const before = performance.now();
        const headers = {
            'Authorization': `Basic ${btoa(`${CONCORDIA_API_USER}:${CONCORDIA_API_KEY}`)}`
        };
        const keys = Object.keys(coursesAndThierLinks);
        const allPromises = [];
        const chunkSize = 50;

        // Split requests to mitigate API request limitations.
        for (let i = 0; i < keys.length; i += chunkSize) {
            const chunk = keys.slice(i, i + chunkSize);
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

	return json(coursesData);
};

// Fetch course and description
const fetchCourseData = async (key: string, headers: Record<string, string>) => {
    const [subject, catalog] = key.split('_');
    const courseURL = `https://opendata.concordia.ca/API/v1/course/catalog/filter/${subject}/${catalog}/UGRD`;
    const course = await fetch(courseURL, { headers }).then(res => res.json());

    // Exit early if no course data found.
    if (!course.length) throw new Error(`No course found for key: ${key}`);

    const descriptionURL = `https://opendata.concordia.ca/API/v1/course/description/filter/${course[0].ID}`;
    const description = await fetch(descriptionURL, { headers }).then(res => res.json());

    return {
        ...course[0],
        description: description[0]?.description,
        whatsappLink: coursesAndThierLinks[key as keyof typeof coursesAndThierLinks],
        discordLink: "https://discord.gg/na8tcjBpEp"
    };
};