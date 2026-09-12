import {
    signupApi,
    verifyEmailApi,
    loginApi,
    forgotPasswordApi,
    verifyPasswordResetOtpApi,
    resetPasswordApi
} from '../../api/auth.api';


export const signup = async (data: unknown) => {
    const response = await signupApi(data);
    return response;
};

export const verifyEmail = async (data: { email: string; otp: string }) => {
    const response = await verifyEmailApi(data);
    return response;
};

export const login = async (data: unknown) => {
    const response = await loginApi(data);
    return response;
};

export const forgotPassword = async (data: unknown) => {
    const response = await forgotPasswordApi(data);
    return response;
};

export const verifyPasswordResetOtp = async (data: unknown) => {
    const response = await verifyPasswordResetOtpApi(data);
    return response;
};

export const resetPassword = async (data: unknown) => {
    const response = await resetPasswordApi(data);
    return response;
};