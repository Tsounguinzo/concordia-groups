import { json } from "@sveltejs/kit";
import type { RequestEvent } from '@sveltejs/kit';
import { CONCORDIA_API_KEY, CONCORDIA_API_USER } from "$env/static/private";

export async function GET({ request }: { request: RequestEvent }) {
    const url = new URL(request.url);
    const courseParam = url.searchParams.get('course');

    // Sanitize and validate the courseParam
    if (!courseParam || !/^[a-zA-Z]+\/\d+$/.test(courseParam)) {
        return json({ error: 'Invalid course format. Expected format: subject/catalog' }, { status: 400 });
    }

    const [subject, catalog] = courseParam.split('/');
    const headers = {
        'Authorization': `Basic ${btoa(`${CONCORDIA_API_USER}:${CONCORDIA_API_KEY}`)}`
    };

    try {
        const courseData = await fetchCourseData(subject, catalog, headers);
        return json({ course: courseData }, { status: 202 });
    } catch (error) {
        // @ts-ignore
        return json({ error: error.message }, { status: 404 });
    }
}

const fetchCourseData = async (subject: string, catalog: string, headers: Record<string, string>) => {
    const courseURL = `https://opendata.concordia.ca/API/v1/course/catalog/filter/${subject}/${catalog}/UGRD`;
    const course = await fetch(courseURL, { headers }).then(res => res.json());

    if (!course.length) throw new Error(`No course found for subject: ${subject} and catalog: ${catalog}`);

    return {
        ...course[0],
    };
};
