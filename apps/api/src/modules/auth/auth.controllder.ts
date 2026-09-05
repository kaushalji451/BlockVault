import type { Request, Response } from "express";
import { AuthService } from "./auth.service.js";
import type { SignupData } from "./types/signup.types.js";
import { asyncHandler } from "../../middleware/async-handler.js";

const authService = new AuthService();


export const signup = asyncHandler(async (
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

});

export const verifyEmail = async (
    req: Request,
    res: Response,
    next: Function
) => {
    try {
        const { email, otp } = req.body;

        const result = await authService.verifyEmail({
            email,
            otp
        });

        return res.status(200).json(result);

    } catch (error) {
        next(error);
    }
}