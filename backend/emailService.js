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
  //   const subject = data.name + `${data.subject ? " | " + data.subject : ""}`;
  //   transporter.sendMail({
  //     from: EMAIL,
  //     to: EMAIL,
  //     replyTo: data.email,
  //     subject: subject,
  //     text: data.message,
  //   });
  //   throw new Error("Testing error");
}
