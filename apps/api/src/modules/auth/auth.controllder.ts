import type { Request, Response } from "express";
import { AuthService } from "./auth.service.js";
import type { SignupData } from "./types/signup.types.js";
import { asyncHandler } from "../../middleware/async-handler.js";

const authService = new AuthService();


export const signup = asyncHandler(
    async (
        req: Request,
        res: Response
    ) => {
        const { username, email, password } = req.body;

        const result = await authService.signup({
            username,
            email,
            password
        } as SignupData);

        return res.status(201).json(result);
    }
);

export const verifyEmail = asyncHandler(
    async (
        req: Request,
        res: Response
    ) => {
        const { email, otp } = req.body;

        const result = await authService.verifyEmail({
            email,
            otp
        });

        return res.status(200).json(result);
    }
);

export const login = asyncHandler(
    async (
        req: Request,
        res: Response
    ) => {
        const { email, password } = req.body;

        const result = await authService.login({
            email,
            password
        });

        return res.status(200).json(result);
    }
)

export const forgotPassword = asyncHandler(
    async (
        req: Request,
        res: Response
    ) => {
        const { email } = req.body;

        const result = await authService.forgotPassword({
            email
        });

        return res.status(200).json(result);
    }
)

export const verifyForgotPasswordOtp = asyncHandler(
    async (
        req: Request,
        res: Response
    ) => {
        const { email, otp } = req.body;

        const result = await authService.verifyForgotPasswordOtp({
            email,
            otp
        });

        return res.status(200).json(result);
    }
)

export const resetPassword = asyncHandler(
    async (
        req: Request,
        res: Response
    ) => {
        const { resetToken, newPassword } = req.body;

        const result = await authService.resetPassword({
            resetToken,
            newPassword
        });

        return res.status(200).json(result);
    }
)

