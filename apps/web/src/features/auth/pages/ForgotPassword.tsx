import { useNavigate } from 'react-router-dom';
import ForgotPasswordCard from '../components/ForgotPasswordCard';

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#FAF8F3]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main className="flex flex-1 items-center justify-center px-5 py-16">
        <ForgotPasswordCard
          onSuccess={(submittedEmail: string) => {
             navigate('/verify-password-reset-otp', { state: { email: submittedEmail } });
          }}
        />
      </main>
    </div>
  );
}
 