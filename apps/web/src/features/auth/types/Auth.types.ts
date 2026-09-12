export interface ApiResponse<T = unknown> {
    success: boolean;
    message: string;
    data?: T;
}

export interface SignupResponse {
    success: boolean;
    message: string;
}

export interface VerifyEmailResponse {
    success: boolean;
    message: string;
}

export interface LoginResponse {
    success: boolean;
    message: string;
    data?: {
        accessToken: string;
        user: {
            id: string;
            username: string;
            email: string;
        };
    };
}