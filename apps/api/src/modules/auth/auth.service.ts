import { UserRepository } from "./repositories/user.repository.js";
import { PasswordService } from "./services/password.service.js";
import { OtpService } from "./services/otp.service.js";
import { EmailService } from "./services/email.service.js";
import { AppError } from "../../shared/errors/AppError.js";

export interface SignupData {
    username: string;
    email: string;
    password: string;
}

export class AuthService {

    private userRepository: UserRepository;
    private passwordService: PasswordService;
    private otpService: OtpService;
    private emailService: EmailService;

    constructor() {
        this.userRepository = new UserRepository();
        this.passwordService = new PasswordService();
        this.otpService = new OtpService();
        this.emailService = new EmailService();
    }

    async signup(data: SignupData) {
        // bussiness logic for signup
        const { username, email, password } = data;

        // Step 1: Check if the user already exists
        const existingUser = await this.userRepository.findByEmail(email);

        console.log("Existing user check:", existingUser);

        if (existingUser) {
            throw new AppError(
                "User already exists",
                409
            );
        }

        // Step 2: Hash the password
        const hashedPassword =
            await this.passwordService.hash(password);

        console.log("Password hashed successfully.");

        // Step 3: Create the user
        const user = await this.userRepository.createUser({
            username,
            email,
            password: hashedPassword
        });

        console.log("User created.");

        // Step 4: Generate and store OTP for email verification
        const verificationOtp = await this.otpService.createVerificationOtp(user.id);

        console.log("Verification OTP generated and stored.");

        // Step 5: Send the OTP to the user's email
        await this.emailService.sendVerifiationOtp(
            email,
            verificationOtp.otp
        );

        return {
            success: true,
            message:
                "Verification OTP sent to your email.",
        }
    }

    async verifyEmail(data: { email: string, otp: string }) {
        const { email, otp } = data;

        // Step 1: Find the user by email
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError(
                "User not found",
                404
            );
        }

        // 2 check the email is already verified
        if (user.isEmailVerified) {
            throw new AppError(
                "Email is already verified",
                400
            );
        }

        // Step 2: Verify the OTP
        const isOtpValid = await this.otpService.verifyOtp(
            user.id,
            otp
        );

        // Step 3: Update the user's email verification status
        await this.userRepository.updateEmailVerified(user.id);

        return {
            success: true,
            message: "Email verified successfully.",
        };
    }
}