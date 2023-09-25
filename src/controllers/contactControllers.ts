import * as dotenv from 'dotenv';
import * as nodemailer from 'nodemailer';

dotenv.config();

const mailTransporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export const submitMessage = (req: any, res: any) => {
    const { name, email, subject, message } = req.body;

    // Compose the email
    const mailOptions: nodemailer.SendMailOptions = {
        from: email,
        to: process.env.EMAIL, // Your Yahoo email address
        subject: `Contact Form - ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    mailTransporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};
