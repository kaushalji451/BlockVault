import { useNavigate } from 'react-router-dom';
import SignupCard from '../components/SignupCard';

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#FAF8F3]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main className="flex flex-1 items-center justify-center px-5 py-16">
        <SignupCard
          onSuccess={(submittedEmail: string) => {
            navigate('/verify-email', { state: { email: submittedEmail } });
          }}
        />
      </main>
    </div>
  );
}
 