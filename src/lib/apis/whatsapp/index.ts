import {CLOUD_API_ACCESS_TOKEN, CLOUD_API_VERSION, WA_PHONE_NUMBER_ID} from "$env/static/private";

export const send_whatsapp_message = async (messageData: any) => {

    const postReq = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${CLOUD_API_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageData),
    };

    const messageURL = `https://graph.facebook.com/${CLOUD_API_VERSION}/${WA_PHONE_NUMBER_ID}/messages`

    return await fetch(messageURL, postReq)
        .then(res => res.ok)
        .catch(() =>  false);

}