export default function Logo() {
    return (
        <span className="inline-flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#1F4B44] text-[#FAF8F3]">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="3" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                    <path d="M12 7.75V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M16.25 12H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            </span>
            <span className="text-[17px] font-bold tracking-tight text-[#1C1C1A]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                BlockVault
            </span>
        </span>
    );
}