import React from 'react';

type BtnVariant = 'primary' | 'secondary' | 'ghost';

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: BtnVariant;
  className?: string;
}

export default function Btn({ children, variant = 'primary', className = '', ...props }: BtnProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-md text-[14.5px] font-medium transition-colors duration-150';
  const variants: Record<BtnVariant, string> = {
    primary: 'bg-[#1C1C1A] text-[#FAF8F3] hover:bg-[#163832] px-5 py-2.5',
    secondary: 'border border-[#E5E2D9] text-[#1C1C1A] hover:border-[#1C1C1A] bg-white px-5 py-2.5',
    ghost: 'text-[#57564F] hover:text-[#1C1C1A] px-3 py-2',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}