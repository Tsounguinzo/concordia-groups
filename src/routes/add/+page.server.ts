import {
    CLOUD_API_ACCESS_TOKEN,
    CLOUD_API_VERSION,
    SENDGRID_API,
    TEMPLATE_ID,
    WA_PHONE_NUMBER_ID
} from '$env/static/private'
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(SENDGRID_API);

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

        const success = await sendgrid
            .send(msg)
            .then((response) => {
                return response[0].statusCode == 202
            })
            .catch(() => {
                return false
            })

        const whatsappMessageSent = await send_message(whatsappNumber)

        return {
            success: success,
            followup: whatsappMessageSent
        }
    }
}

async function send_message(phoneNbr: number) {
    const data = {
        messaging_product: "whatsapp",
        to: phoneNbr,
        type: 'template',
        template: {
            name: "request_acknowledgment",
            language: {
                code: "en_US"
            }
        }
    };

    const postReq = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${CLOUD_API_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };

    const messageURL = `https://graph.facebook.com/${CLOUD_API_VERSION}/${WA_PHONE_NUMBER_ID}/messages`

    return await fetch(messageURL, postReq)
        .then(res => {
            return res.status === 200
        })
        .catch(() => {
            return false
        });

}