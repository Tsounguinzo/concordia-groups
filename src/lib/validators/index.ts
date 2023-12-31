import {coursesAndThierLinks} from "$lib/stores";

export function validatePhoneNumber(element: any): void {
    if (!element) return;
    if (element.validity.valueMissing) {
        element.setCustomValidity('Whatsapp number required');
    } else if (element.validity.patternMismatch) {
        element.setCustomValidity('Use international format e.g +1 438 589 4367');
    } else {
        element.setCustomValidity('');
    }
}

export function validateWhatsappLink(element: any): void {
    if (!element) return;

    if (element.validity.valueMissing) {
        element.setCustomValidity('Please enter the link to your Whatsapp group.');
    } else if (element.validity.patternMismatch) {
        element.setCustomValidity('Ensure the link is a valid Whatsapp URL.');
    } else {
        element.setCustomValidity('');
    }
}

export function validateDiscordLink(element: any): void {
    if (!element) return;

    if (element.validity.valueMissing) {
        element.setCustomValidity('Please enter the link to your Discord server.');
    } else if (element.validity.patternMismatch) {
        element.setCustomValidity('Ensure the link is a valid Discord URL.');
    } else {
        element.setCustomValidity('');
    }
}

export async function validateCourseName(courseName: string, element: any): Promise<void> {
    if (!element) return;

    if (element.validity.valueMissing) {
        element.setCustomValidity('Course name cannot be empty.');
    } else if (element.validity.patternMismatch) {
        element.setCustomValidity('Must be 4 letters followed by 3 or 4 numbers .');
    } else if (/^\s*([a-zA-Z]{4})[\s\-]*(\d{3,4})\s*$/.test(courseName)) {

        const match = courseName.match(/^\s*([a-zA-Z]{4})[\s\-]*(\d{3,4})\s*$/);
        // @ts-ignore
        const subject = match[1];
        // @ts-ignore
        const catalog = match[2];

        if (doesCourseExist(subject, catalog)) {
            element.setCustomValidity('This course group already exits.');
        } else {
            element.setCustomValidity('')
        }

    } else {
        element.setCustomValidity('')
    }

}

function doesCourseExist(subject: string, catalog: string) {
    const course = `${subject.toUpperCase()}_${catalog}`
    return course in coursesAndThierLinks;
}