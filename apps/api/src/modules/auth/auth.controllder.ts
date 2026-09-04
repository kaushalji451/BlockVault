import type { Request, Response } from "express";
import { AuthService, type SignupData } from "./auth.service.js";

const authService = new AuthService();


export const signup = (
    req: Request,
    res: Response,
    next: Function
) => {
    // Implementation for signup logic
    try {
        const { username, email, password } = req.body;

        const result = authService.signup({
            username,
            email,
            password
        } as SignupData);

        return res.status(201).json(result);

    } catch (error) {
        next(error);
    }

};

export const verifyEmail = (
    req: Request,
    res: Response,
    next: Function
) => {
    try {
        const { email, otp } = req.body;

        const result = authService.verifyEmail({
            email,
            otp
        });

        return res.status(200).json(result);

    } catch (error) {
        next(error);
    }
}