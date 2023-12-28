import {TEMPLATE_ID} from '$env/static/private'
import {send_whatsapp_message} from "$lib/apis/whatsapp";
import {send_email} from "$lib/apis/sendgrid";

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        const courseName = data.get('courseName');
        const courseLink = data.get('whatsappGroupLink');
        const comment = data.get('comment');
        const whatsappNumber = data.get('followupNumber');

        const nameParts = courseName.match(/^\s*([a-zA-Z]{4})[\s\-]*(\d{3,4})\s*$/)
        const formattedName = `${nameParts[1].toUpperCase()} ${nameParts[2].toUpperCase()}`

        const msg = {
            from: "Beaudelaire.dev@gmail.com",
            to: "Beaudelaire@tutamail.com",
            templateId: TEMPLATE_ID,
            dynamic_template_data: {
                subject: "Request to add a group from " + whatsappNumber,
                courseName: formattedName,
                courseLink: courseLink,
                comment: comment ? comment : 'NONE'
            }
        }

        const whatsappMessage = {
            messaging_product: "whatsapp",
            to: whatsappNumber,
            type: 'template',
            template: {
                name: "request_acknowledgment",
                language: {
                    code: "en_US"
                }
            }
        };

        const success = await send_email(msg);
        const whatsappMessageSent = await send_whatsapp_message(whatsappMessage)

        return {
            success: success,
            followup: whatsappMessageSent
        }
    }
}