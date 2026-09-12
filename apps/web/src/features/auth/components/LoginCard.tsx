import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthFormField from "././AuthFormField";
import { loginApi } from "../../../api/auth.api";

interface LoginCardProps {
    onSuccess: () => void;
}

const initialForm = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export default function LoginCard({ onSuccess }: LoginCardProps) {
    const [formData, setFormData] = useState(initialForm);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (error) {
            setError("");
        }
    }

    const isFormValid =
        formData.email.trim() !== "" &&
        formData.password !== "";

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        const { email, password } = formData;

        if (!email || !password) {
            setError("Fill in every field to login your account.");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }

        try {
            setLoading(true);

            const result = await loginApi({
                email,
                password,
            });

            if (!result.success) {
                setError(
                    result.message || "Unable to Login to your account."
                );
                return;
            }

            // login successful
            onSuccess();
        } catch (error: any) {
            console.error("Login error:", error);

            setError(
                error?.response?.data?.message ||
                error?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full max-w-sm rounded-xl border border-[#E5E2D9] bg-white p-7 shadow-[0_1px_3px_rgba(28,28,26,0.06)]">

            <h1
                className="text-xl font-bold text-[#1C1C1A]"
                style={{ fontFamily: "Manrope, sans-serif" }}
            >
                Login account
            </h1>

            <form
                className="mt-6 flex flex-col gap-4"
                onSubmit={handleSubmit}
                noValidate
            >

                <AuthFormField
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                />

                <AuthFormField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                />

                {error && (
                    <p
                        className="text-[13px] text-red-700"
                        role="alert"
                    >
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={!isFormValid || loading}
                    className={`mt-1 w-full rounded-md px-5 py-2.5 text-[14.5px] font-medium transition-colors ${!isFormValid || loading
                        ? "cursor-not-allowed bg-[#D8D6D0] text-[#8A8983]"
                        : "bg-[#1C1C1A] text-[#FAF8F3] hover:bg-[#163832]"
                        }`}
                >
                    {loading ? "Logining Account..." : "Login Account"}
                </button>
            </form>

            <p className="mt-5 text-center text-[13px] text-[#57564F]">
                Don't have an account?{" "}
                <Link
                    to="/signup"
                    className="cursor-pointer font-medium text-[#1C1C1A] hover:text-[#1F4B44]"
                >
                    Signup
                </Link>
            </p>
        </div>
    );
}
