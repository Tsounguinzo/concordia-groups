import axios from 'axios';
import {load} from 'cheerio';

/**
 * Target URLs for Concordia's course catalog, indexed by subject code.
 */
export const subjectUrls: { [key: string]: string } = {
    'ECON': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-080-department-of-economics/economics-courses.html',
    'BIOL': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-030-department-of-biology/biology-courses.html',
    'PHYS': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-230-department-of-physics/physics-courses.html',
    'MATH': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-200-department-of-mathematics-and-statistics/mathematics-and-statistics-courses.html',
    'MAST': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-200-department-of-mathematics-and-statistics/mathematics-and-statistics-courses.html',
    'MIAE': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-71-gina-cody-school-of-engineering-and-computer-science/section-71-60-engineering-course-descriptions.html',
    'ENGR': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-71-gina-cody-school-of-engineering-and-computer-science/section-71-60-engineering-course-descriptions.html',
    'CHEM': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-050-department-of-chemistry-and-biochemistry/chemistry-and-biochemistry-courses.html',
    'COMP': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-71-gina-cody-school-of-engineering-and-computer-science/section-71-70-department-of-computer-science-and-software-engineering/section-71-70-10-computer-science-and-software-engineering-courses.html',
    'SOEN': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-71-gina-cody-school-of-engineering-and-computer-science/section-71-70-department-of-computer-science-and-software-engineering/section-71-70-10-computer-science-and-software-engineering-courses.html',

};

/**
 * Attempts to find a course tag number in Concordia's catalog based on subject and catalog number.
 *
 * @param {string} subject - The subject code.
 * @param {number} catalog - The catalog/course number.
 * @returns {Promise<string|null>} - Course tag or null otherwise.
 */
export async function getCourseIdByTitle(subject: string, catalog: number): Promise<string | null> {
    const URL = subjectUrls[subject.toUpperCase()];
    if (!URL) {
        console.error("Invalid category provided.");
        return null;
    }

    try {
        const {data} = await axios.get(URL);
        const $ = load(data);

        // Using the title attribute for course matching because Concordia's catalog structure embeds the course tag there.
        const targetTitle = `${subject.toLowerCase()}-${catalog}`;
        const courseDiv = $(`.course[title="${targetTitle}"]`);
        const courseId = courseDiv.find('a').attr('id');

        return courseId || null;
    } catch (error) {
        // @ts-ignore
        console.error("Error scraping the website:", error.message);
        return null;
    }
}