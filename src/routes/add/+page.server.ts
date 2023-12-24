export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        const courseName = data.get('name');
        const courseLink = data.get('link');
        const comment = data.get('comment');
        const followup = data.get('followup');
        const contact = data.get('number');

        return {
            courseName: courseName,
            courseLink: courseLink,
            comment: comment,
            followup: followup,
            contact: contact
        }
    }
}