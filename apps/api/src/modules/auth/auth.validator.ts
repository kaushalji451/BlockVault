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
        next();
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
        next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ success: false, message: error.message });
        }
        return res.status(500).json({ success: false, message: "Internal server error" });
    }

    next();
}