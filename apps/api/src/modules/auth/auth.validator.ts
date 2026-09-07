import type { Request, Response, NextFunction } from 'express';
import * as z from 'zod';

export const signupValidatior = (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;

    const schema = z.object({
        username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    });

    try {
        schema.parse({ username, email, password });
        return next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ success: false, message: error.message });
        }
        return res.status(500).json({ success: false, message: "Internal server error" });
    }

}

export const verifyEmailValidator = (req: Request, res: Response, next: NextFunction) => {
    const { email, otp } = req.body;

    const schema = z.object({
        email: z.string().email({ message: "Invalid email address" }),
        otp: z.string().length(6, { message: "OTP must be 6 characters long" }),
    });

    try {
        schema.parse({ email, otp });
        return next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ success: false, message: error.message });
        }
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const schema = z.object({
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    });

    try {
        schema.parse({ email, password });
        return next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ success: false, message: error.message });
        }
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const forgetPasswordValidator = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const schema = z.object({
        email: z.string().email({ message: "Invalid email address" })
    });

    try {
        schema.parse({ email });
        return next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ success: false, message: error.message });
        }
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const verifyForgotPasswordOtpValidator = (req: Request, res: Response, next: NextFunction) => {
    const { email, otp } = req.body;

    const schema = z.object({
        email: z.string().email({ message: "Invalid email address" }),
        otp: z.string().length(6, { message: "OTP must be 6 characters long" }),
    });

    try {
        schema.parse({ email, otp });
        return next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ success: false, message: error.message });
        }
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const resetPasswordValidator = (req: Request, res: Response, next: NextFunction) => {
    const { resetToken, newPassword } = req.body;
    console.log("comming for test ");

    const schema = z.object({
        resetToken: z.string().min(1, { message: "Reset token is required" }),
        newPassword: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    });

    try {
        schema.parse({ resetToken, newPassword });
        return next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ success: false, message: error.message });
        }
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}