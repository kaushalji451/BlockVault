export interface ForgotPasswordData {
    email: string;
}

export interface VerifyForgotPasswordOtpData {
    email: string;
    otp: string;
}

export interface ResetPasswordData {
    resetToken: string;
    newPassword: string;
}