import React from 'react';

interface AuthFormFieldProps {
    id: string;
    label: string;
    type?: string;
    autoComplete?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthFormField({
    id,
    label,
    type = 'text',
    autoComplete,
    placeholder,
    value,
    onChange
}: AuthFormFieldProps) {
    return (
        <div>
            <label htmlFor={id} className="text-[13px] font-medium text-[#1C1C1A]">{label}</label>
            <input
                id={id}
                name={id}
                type={type}
                autoComplete={autoComplete}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="mt-1.5 w-full rounded-md border border-[#E5E2D9] bg-[#FAF8F3] px-3 py-2.5 text-[14px] text-[#1C1C1A] placeholder:text-[#8A887F] outline-none focus:border-[#1F4B44] focus:ring-1 focus:ring-[#1F4B44]"
            />
        </div>
    );
}