import api from './axios'
import type {
    SignupResponse,
    VerifyEmailResponse,
    LoginResponse,
    ApiResponse
} from '../features/auth/types/Auth.types';

export const signupApi = async (
    data: unknown
): Promise<SignupResponse> => {
    const response = await api.post<SignupResponse>(
        "/auth/signup",
        data
    );
    return response.data;
}

export const verifyEmailApi = async (
    data: { email: string; otp: string }
): Promise<VerifyEmailResponse> => {
    const response = await api.post<VerifyEmailResponse>(
        "/auth/verify-email",
        data
    );

    return response.data;
};

export const loginApi = async (
    data: unknown
): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>(
        "/auth/login",
        data
    );

    return response.data;
};

export const forgotPasswordApi = async (
    data: unknown
): Promise<ApiResponse> => {
    const response = await api.post<ApiResponse>(
        "/auth/forgot-password",
        data
    );

    return response.data;
};

export const verifyPasswordResetOtpApi = async (
    data: unknown
): Promise<ApiResponse> => {
    const response = await api.post<ApiResponse>(
        "/auth/verify-password-reset-otp",
        data
    );

    return response.data;
};

export const resetPasswordApi = async (
    data: unknown
): Promise<ApiResponse> => {
    const response = await api.post<ApiResponse>(
        "/auth/reset-password",
        data
    );

    return response.data;
};

