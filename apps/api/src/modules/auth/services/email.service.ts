import nodemailer from "nodemailer";
import { requireEnv } from "../../../config/env.js";
import { verificationOtpTemplate } from "../templates/verification-otp.template.js";

export class EmailService {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: requireEnv("SMTP_HOST"),
            port: Number(requireEnv("SMTP_PORT")),
            secure: false,
            auth: {
                user: requireEnv("SMTP_USER"),
                pass: requireEnv("SMTP_PASSWORD")
            }
        })
    }

    async sendVerifiationOtp(
        email: string,
        otp: string
    ) {
        await this.transporter.sendMail({
            from: requireEnv("SMTP_FROM"),
            to: email,
            subject: "BlockVault Email Verification",
            html: verificationOtpTemplate(otp)
        })
    }

}