import mailer from "@sendgrid/mail";
import { EMAIL, SENDGRID_EMAIL, SENDGRID_API_KEY } from "./config.js";

mailer.setApiKey(SENDGRID_API_KEY);

export default async function contactEmail(data) {
  const subject = data.name + `${data.subject ? " | " + data.subject : ""}`;
  const res = await mailer.send({
    from: SENDGRID_EMAIL,
    to: EMAIL,
    replyTo: data.email,
    subject: subject,
    text: data.message,
    html: data.message,
  });
}
