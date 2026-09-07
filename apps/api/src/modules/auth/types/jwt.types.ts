import type { JwtPayload } from "jsonwebtoken";

export interface PasswordResetPayload extends JwtPayload {
    userId: string;
}

export interface AccessTokenPayload {
    userId: string;
    email: string;
}