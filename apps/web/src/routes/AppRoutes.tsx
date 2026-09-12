import { Routes, Route } from 'react-router-dom';

import AppLayout from '../layouts/AppLayout';

import LandingPage from "../pages/LandingPage";
import Login from "../features/auth/pages/Login"
import Signup from "../features/auth/pages/Signup"
import ForgotPassword from "../features/auth/pages/ForgotPassword"
import ResetPassword from "../features/auth/pages/ResetPassword"
import VerifyResetOtp from '../features/auth/pages/VerifyResetOtp';
import VerifyEmailOtp from '../features/auth/pages/VerifyEmailOtp';
import Home from '../features/auth/pages/Home';

const APPRoute = () => {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<LandingPage />} />

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                <Route
                    path="/verify-email"
                    element={<VerifyEmailOtp />}
                />

                <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                />

                <Route
                    path="/verify-password-reset-otp"
                    element={<VerifyResetOtp />}
                />

                <Route
                    path="/reset-password"
                    element={<ResetPassword />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />

            </Route>
        </Routes>
    )
}

export default APPRoute;