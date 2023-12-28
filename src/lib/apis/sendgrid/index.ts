import sendgrid from "@sendgrid/mail";
import {SENDGRID_API} from "$env/static/private";

sendgrid.setApiKey(SENDGRID_API);
export const send_email = async (messageData: any) => {

    return await sendgrid
        .send(messageData)
        .then(res => res[0].statusCode == 202)
        .catch(() =>  false);

}