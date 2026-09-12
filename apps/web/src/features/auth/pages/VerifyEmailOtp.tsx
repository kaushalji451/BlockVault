import { useLocation, useNavigate } from 'react-router-dom';
import OtpVerificationCard from '../components/OtpVerificationCard';

export default function VerifyEmailOtp() {
    const location = useLocation();
    const navigate = useNavigate();
    const initialEmail = (location.state as { email?: string } | null)?.email || '';

    return (
        <div className="flex flex-col bg-[#FAF8F3]" style={{ fontFamily: 'Inter, sans-serif' }}>
            <main className="flex flex-1 items-center justify-center px-5 py-16">
                <OtpVerificationCard
                    initialEmail={initialEmail}
                    type="email-verification"
                    onSuccess={() => {
                        navigate("/home");
                    }}
                />
            </main>
        </div>
    );
}
