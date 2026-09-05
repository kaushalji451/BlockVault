import { postgres } from "../../../db/postgres.js";

export interface CreateOtpData {
    userId: string;
    otpHash: string;
    expiresAt: Date;
}


export class OtpRepository {

    async createOtp(data: CreateOtpData): Promise<void> {
        const result = await postgres.query(
            `
            INSERT INTO email_verification_otps (
            user_id,
            otp_hash,
            expires_at
            )
            VALUES ($1, $2, $3)
            RETURNING 
            id,
            user_id,
            expires_at,
            attempts,
            used_at,
            created_at
            `,
            [data.userId, data.otpHash, data.expiresAt]
        );

        return result.rows[0];
    }


    async findActiveOtp(userId: string) {
        const result = await postgres.query(
            `
            SELECT
            id,
            user_id,
            otp_hash,
            expires_at,
            attempts,
            used_at,
            created_at
        FROM email_verification_otps
        WHERE user_id = $1
        AND used_at IS NULL
        ORDER BY created_at DESC
        LIMIT 1
            `,
            [userId]
        );
        return result.rows[0] || null;
    }

    async incrementAttempts(otpId: string): Promise<void> {
        await postgres.query(
            `
            UPDATE email_verification_otps
            SET attempts = attempts + 1
            WHERE id = $1
            `,
            [otpId]
        );
    }

    async invalidateOtp(otpId: string): Promise<void> {
        await postgres.query(
            `
            UPDATE email_verification_otps
            SET used_at = NOW()
            WHERE id = $1
            `,
            [otpId]
        );
    }

}