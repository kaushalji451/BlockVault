import Router from 'express';
import {
    signupValidatior,
    verifyEmailValidator,
    loginValidator,
    forgetPasswordValidator,
    verifyForgotPasswordOtpValidator,
    resetPasswordValidator
} from './auth.validator.js'

import {
    signup,
    verifyEmail,
    login,
    forgotPassword,
    resetPassword,
    verifyForgotPasswordOtp
} from './auth.controllder.js';

const AuthRoute = Router();

// Signup route
AuthRoute.post('/signup', signupValidatior, signup);

// Verify email route
AuthRoute.post('/verify-email', verifyEmailValidator, verifyEmail);

// Login route
AuthRoute.post('/login', loginValidator, login);

// Forgot-password route
AuthRoute.post('/forgot-password', forgetPasswordValidator, forgotPassword);

// verify forget-password-otp
AuthRoute.post('/verify-password-reset-otp', verifyForgotPasswordOtpValidator, verifyForgotPasswordOtp);

AuthRoute.post('/reset-password', resetPasswordValidator, resetPassword);

export default AuthRoute;