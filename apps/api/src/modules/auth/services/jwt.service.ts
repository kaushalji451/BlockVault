import Jwt, { type SignOptions } from "jsonwebtoken";
import { requireEnv } from "../../../config/env.js";
import type { AccessTokenPayload } from "../types/jwt.types.js";
import type { StringValue } from "ms";

export class JwtService {
    private readonly accessSecret: string;
    private readonly accessExpiresIn: StringValue;

    constructor() {
        this.accessSecret = requireEnv(
            "JWT_ACCESS_SECRET"
        );

        this.accessExpiresIn = requireEnv(
            "JWT_ACCESS_EXPIRES_IN"

        ) as StringValue;
    }

    genrateAccessToken(userId: string, email: string) {

        console.log("token genrating");

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