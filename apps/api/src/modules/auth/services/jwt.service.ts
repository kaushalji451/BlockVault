import Jwt, { type SignOptions } from "jsonwebtoken";
import { requireEnv } from "../../../config/env.js";
import type { AccessTokenPayload } from "../types/jwt.types.js";

export class JwtService {
    private readonly accessSecret: string;
    private readonly accessExpiresIn;

    constructor() {
        this.accessSecret = requireEnv(
            "JWT_ACCESS_SECRET"
        );

        this.accessExpiresIn = Number(
            requireEnv(
                "JWT_ACCESS_EXPIRES_IN"
            )
        );
    }

    genrateAccessToken(userId: string, email: string) {

        const payload: AccessTokenPayload = {
            userId,
            email
        }
        const options: SignOptions = {
            expiresIn: this.accessExpiresIn,
        };

        return Jwt.sign(
            payload,
            this.accessSecret,
            options
        );

    }

    verifyAccessToken(token: string) {
        return Jwt.verify(
            token,
            this.accessSecret
        );
    }

    decodeToken(token: string) {
        return Jwt.decode(token);
    }
}