import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthFormField from './AuthFormField';
import { verifyEmail, verifyPasswordResetOtp } from '../auth.service';

interface OtpVerificationCardProps {
    initialEmail?: string;
    type: "email-verification" | "password-reset";
    onSuccess?: (result?: unknown) => void;
}

export default function OtpVerificationCard({
    initialEmail = '',
    type,
    onSuccess,
}: OtpVerificationCardProps) {
    const [email, setEmail] = useState(initialEmail);
    const [isEditingEmail, setIsEditingEmail] = useState(!initialEmail);
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const isEmailVerification = type === "email-verification";

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (initialEmail) {
            setEmail(initialEmail);
            setIsEditingEmail(false);
        }
    }, [initialEmail]);

    // Auto-focus the first OTP input box on mount
    useEffect(() => {
        if (!isEditingEmail) {
            inputRefs.current[0]?.focus();
        }
    }, [isEditingEmail]);

    function handleOtpChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
        const rawVal = e.target.value;
        const digit = rawVal.replace(/\D/g, '').slice(-1);

        const newOtp = [...otp];
        newOtp[index] = digit;
        setOtp(newOtp);

        if (digit && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
        if (e.key === 'Backspace') {
            if (!otp[index] && index > 0) {
                const newOtp = [...otp];
                newOtp[index - 1] = '';
                setOtp(newOtp);
                inputRefs.current[index - 1]?.focus();
            } else {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === 'ArrowRight' && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    }

    function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        if (!pastedData) return;

        const newOtp = [...otp];
        for (let i = 0; i < 6; i++) {
            newOtp[i] = pastedData[i] || '';
        }
        setOtp(newOtp);

        const targetIndex = Math.min(pastedData.length, 5);
        inputRefs.current[targetIndex]?.focus();
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');
        setSuccess('');

        const trimmedEmail = email.trim();
        if (!trimmedEmail) {
            setError('Please enter your email address.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedEmail)) {
            setError('Please enter a valid email address.');
            return;
        }

        const otpCode = otp.join('');
        if (otpCode.length < 6) {
            setError('Please enter the complete 6-digit OTP code.');
            return;
        }

        setIsLoading(true);

        try {
            const res =
                type === "email-verification"
                    ? await verifyEmail({
                        email: trimmedEmail,
                        otp: otpCode,
                    })
                    : await verifyPasswordResetOtp({
                        email: trimmedEmail,
                        otp: otpCode,
                    });
            setSuccess('Email verified successfully! Redirecting to login...');
            if (!res.success) {
                setError(
                    res.message || "Verification failed. Please try again."
                );
                return;
            }

            // Verification successful
            onSuccess?.();

        } catch (err: unknown) {
            const maybeAxiosError = err as { response?: { data?: { message?: string } }; message?: string };
            const errorMsg =
                maybeAxiosError?.response?.data?.message ||
                maybeAxiosError?.message ||
                'Verification failed. Please check the code and try again.';
            setError(errorMsg);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="w-full max-w-sm rounded-xl border border-[#E5E2D9] bg-white p-7 shadow-[0_1px_3px_rgba(28,28,26,0.06)]">
            <h1 className="text-xl font-bold text-[#1C1C1A]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {isEmailVerification
                    ? "Verify your email"
                    : "Verify password reset"}
            </h1>

            <p className="mt-2 text-[13.5px] leading-relaxed text-[#57564F]">
                {email && !isEditingEmail ? (
                    <>
                        Enter the 6-digit code sent to{" "}
                        <span className="font-semibold text-[#1C1C1A] break-all">
                            {email}
                        </span>
                        .{" "}
                        <button
                            type="button"
                            onClick={() => setIsEditingEmail(true)}
                            className="font-medium text-[#1F4B44] hover:underline"
                        >
                            Change
                        </button>
                    </>
                ) : (
                    isEmailVerification
                        ? "Enter your email and the 6-digit verification code sent to your inbox."
                        : "Enter your email and the 6-digit code sent to reset your password."
                )}
            </p>

            <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                {(!email || isEditingEmail) && (
                    <AuthFormField
                        id="email"
                        label="Email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                )}

                <div>
                    <label className="text-[13px] font-medium text-[#1C1C1A]">
                        Verification Code
                    </label>
                    <div className="mt-1.5 flex justify-between gap-2">
                        {otp.map((digit, idx) => (
                            <input
                                key={idx}
                                ref={(el) => {
                                    inputRefs.current[idx] = el;
                                }}
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleOtpChange(e, idx)}
                                onKeyDown={(e) => handleKeyDown(e, idx)}
                                onPaste={handlePaste}
                                className="h-12 w-11 rounded-md border border-[#E5E2D9] bg-[#FAF8F3] text-center text-lg font-semibold text-[#1C1C1A] outline-none transition-colors focus:border-[#1F4B44] focus:ring-1 focus:ring-[#1F4B44]"
                                aria-label={`Digit ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {error && (
                    <p className="text-[13px] text-red-700" role="alert">
                        {error}
                    </p>
                )}

                {success && (
                    <p className="text-[13px] font-medium text-[#1F4B44]" role="status">
                        {success}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-1 w-full rounded-md bg-[#1C1C1A] px-5 py-2.5 text-[14.5px] font-medium text-[#FAF8F3] transition-colors hover:bg-[#163832] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading
                        ? "Verifying..."
                        : isEmailVerification
                            ? "Verify Email"
                            : "Verify Code"}
                </button>
            </form>

            <div className="mt-5 flex flex-col gap-2 text-center text-[13px] text-[#57564F]">
                <p>
                    Didn't receive the code?{' '}
                    <span className="cursor-pointer font-medium text-[#1C1C1A] hover:text-[#1F4B44]">
                        Check spam or resend
                    </span>
                </p>
                <p>
                    Back to{' '}
                    <Link to="/signup" className="cursor-pointer font-medium text-[#1C1C1A] hover:text-[#1F4B44]">
                        Sign up
                    </Link>
                    {' · '}
                    <Link to="/login" className="cursor-pointer font-medium text-[#1C1C1A] hover:text-[#1F4B44]">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

