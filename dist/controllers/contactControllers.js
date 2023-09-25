"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitMessage = void 0;
const dotenv = __importStar(require("dotenv"));
const nodemailer = __importStar(require("nodemailer"));
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
const submitMessage = (req, res) => {
    const { name, email, subject, message } = req.body;
    // Compose the email
    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `Contact Form - ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    // Send the email
    mailTransporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to send email' });
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    });
};
exports.submitMessage = submitMessage;
//# sourceMappingURL=contactControllers.js.map