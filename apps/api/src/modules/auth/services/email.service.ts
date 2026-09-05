import nodemailer from "nodemailer";
import { requireEnv } from "../../../config/env.js";
import { verificationOtpTemplate } from "../templates/verification-otp.template.js";
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

    async sendVerifiationOtp(
        email: string,
        otp: string
    ) {
        try {
            console.log("Arrived to send the OTP");

            const info = await this.transporter.sendMail({
                from: requireEnv("SMTP_FROM"),
                to: email,
                subject: "BlockVault Email Verification",
                html: verificationOtpTemplate(otp)
            });

            console.log("OTP email sent successfully:", info.messageId);

        } catch (error) {
            console.error("Failed to send verification OTP email:", error);

            throw new AppError("Failed to send verification OTP email.", 500);
        }
    }

}