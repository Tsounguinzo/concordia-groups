import {courseToWhatsAppLink} from "$lib/courseToWhatsAppLink";

export async function isCourseValid(subject: string, catalog: string) {
    try {
        const response = await fetch(`/api/course?course=${subject}/${catalog}`);

        if (response.status === 202) {
            return true;
        } else {
            console.error(`Error fetching course: Status ${response.status}`);
            return false;
        }
    } catch (err) {
        console.error('Error fetching course:', err);
        return false;
    }
}

export function doesCourseExist(subject: string, catalog: string) {
    const toCheck = `${subject.toUpperCase()}_${catalog}_UGRD`
    return toCheck in courseToWhatsAppLink;
}