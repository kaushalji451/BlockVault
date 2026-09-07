import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { OtpRepository } from '../repositories/otp.repository.js';
import { AppError } from '../../../shared/errors/AppError.js';
import { OtpPurpose } from '../types/otp.types.js';

export class OtpService {

    private readonly saltRounds = 10;
    private readonly otpLifetimeMinutes = 5;

    private otpRepository: OtpRepository;

    constructor() {
        this.otpRepository = new OtpRepository();
    }

    genrateOtp(length: number = 6): string {
        const otp = crypto.randomInt(0, Math.pow(10, length)).toString().padStart(length, '0');
        return otp;
    }

    async hashOtp(otp: string): Promise<string> {
        const hashedOtp = await bcrypt.hash(otp, this.saltRounds);
        return hashedOtp;
    }

    async createVerificationOtp(userId: string, purpose: OtpPurpose) {
        const otp = this.genrateOtp();
        const otpHash = await this.hashOtp(otp);
        const expiresAt = new Date(Date.now() + this.otpLifetimeMinutes * 60 * 1000);

        await this.otpRepository.createOtp({
            userId,
            purpose,
            otpHash,
            expiresAt
        })
        return {
            otp,
            expiresAt
        };
    }

    async verifyOtp(
        userId: string,
        otp: string,
        purpose: OtpPurpose
    ): Promise<void> {
        console.log("verifying otp");
        const storedOtp = await this.otpRepository.findActiveOtp(userId, purpose);

        if (!storedOtp) {
            throw new AppError(
                "No active OTP found for this user.",
                404
            );
        }

        // Maximum attempts
        if (storedOtp.attempts >= 5) {
            throw new AppError(
                "Too many OTP attempts",
                400
            );
        }

        // Check expiration
        if (
            new Date(storedOtp.expires_at) <= new Date()
        ) {
            throw new AppError(
                "OTP has expired",
                400
            );
        }

        // Compare OTP
        const isValid =
            await bcrypt.compare(
                otp,
                storedOtp.otp_hash
            );

        // Invalid OTP
        if (!isValid) {

            await this.otpRepository.incrementAttempts(
                storedOtp.id
            );

            throw new AppError(
                "Invalid OTP",
                400
            );
        }
        // OTP is valid
        await this.otpRepository.invalidateOtp(
            storedOtp.id,
            purpose
        );
    }

}