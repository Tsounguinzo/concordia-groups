import sendgrid from '@sendgrid/mail';
import {CONCORDIA_API_KEY, CONCORDIA_API_USER, SENDGRID_API, TEMPLATE_ID} from '$env/static/private'

//sendgrid.setApiKey(SENDGRID_API);

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        const courseName = data.get('name');
        const courseLink = data.get('link');
        const comment = data.get('comment');
        const followup = data.get('followup');
        const contact = data.get('number');

        const msg = {
            from: "Beaudelaire.dev@gmail.com",
            to: "Beaudelaire@tutamail.com",
            templateId: TEMPLATE_ID,
            dynamic_template_data: {
                subject: "Request to add a group from " + followup ? contact : 'UNKNOWN',
                courseName: courseName,
                courseLink: courseLink,
                comment: comment
            }
        }

       /* const success = await sendgrid
            .send(msg)
            .then((response) => {
                return response[0].statusCode == 202
            })
            .catch((error) => {
                return false
            }) */

        return {
            success: true
        }
    }
}