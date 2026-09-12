import { useNavigate } from 'react-router-dom';
import LoginCard from '../components/LoginCard';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#FAF8F3]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main className="flex flex-1 items-center justify-center px-5 py-16">
        <LoginCard
          onSuccess={() => {
            navigate('/home' );
          }}
        />
      </main>
    </div>
  );
}
 