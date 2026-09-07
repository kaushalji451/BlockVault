import nodemailer from "nodemailer";
import { requireEnv } from "../../../config/env.js";
import { AppError } from "../../../shared/errors/AppError.js";

export class EmailService {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: requireEnv("SMTP_USER"),
                pass: requireEnv("SMTP_PASSWORD")
            },
            tls: {
                rejectUnauthorized: false,
            },
        })
    }

    async sendOtpEmail(
        email: string,
        otp: string,
        subject: string,
        template: (otp: string) => string
    ) {
        try {
            console.log("Arrived to send the OTP");

            const info = await this.transporter.sendMail({
                from: requireEnv("SMTP_FROM"),
                to: email,
                subject,
                html: template(otp)
            });

            console.log("OTP email sent successfully:", info.messageId);

        } catch (error) {
            console.error("Failed to send OTP email:", error);

            throw new AppError("Failed to send OTP email.", 500);
        }
    }

}