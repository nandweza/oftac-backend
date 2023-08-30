"use strict";
// import dotenv from 'dotenv';
// import express from 'express';
// import nodemailer, { TransportOptions } from 'nodemailer';
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// const emailConfig: TransportOptions = {
//     service: 'yahoo',
//     auth: {
//         type: 'OAuth2',
//         user: process.env.EMAIL,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.APP_PASSWORD
//     },
// };
// const mailTransporter = nodemailer.createTransport(emailConfig);
// export const submitMessage = (req: express.Request, res: express.Response) => {
//     const { name, email, subject, message } = req.body;
//     // Compose the email
//     const mailOptions = {
//         from: email,
//         to: process.env.EMAIL,
//         subject: `Contact Form - ${subject}`,
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };
//     // Send the email
//     mailTransporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
//         if (error) {
//             console.log(error);
//             res.status(500).json({ error: 'Failed to send email' });
//         } else {
//             // console.log('Email sent: ' + info.response);
//             res.json({ message: 'Email sent successfully' });
//         }
//     });
// }
//# sourceMappingURL=contactControllers.js.map