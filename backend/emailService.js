import mailer from "nodemailer";
import { EMAIL } from "./config.js";
import { GOOGLE_APP_PASSWORD } from "./config.js";

const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: GOOGLE_APP_PASSWORD,
  },
});

export default async function contactEmail(data) {
  transporter.sendEmail({
    from: EMAIL,
    to: EMAIL,
    replyTo: data.userEmail,
    subject: data.subject,
    text: data.message,
  });
}
