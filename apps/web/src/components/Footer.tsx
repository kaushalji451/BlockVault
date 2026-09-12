import Logo from "./Logo";

export default function Footer() {
    const columns = [
        { heading: 'Product', links: ['Features', 'Security', 'How It Works'] },
        { heading: 'Account', links: ['Login', 'Get Started'] },
    ];
    return (
        <footer className="bg-[#FAF8F3]">
            <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
                    <div>
                        <Logo />
                        <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-[#57564F]">
                            Secure, distributed file storage for people and teams who can't afford to lose what they store.
                        </p>
                    </div>
                    {columns.map((col) => (
                        <div key={col.heading}>
                            <h3 className="text-[13px] font-semibold text-[#1C1C1A]">{col.heading}</h3>
                            <ul className="mt-3.5 flex flex-col gap-2.5">
                                {col.links.map((label) => (
                                    <li key={label}>
                                        <a href="#" className="inline-flex items-center gap-1.5 text-[13.5px] text-[#57564F] hover:text-[#1C1C1A]">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-12 border-t border-[#E5E2D9] pt-6 text-[13px] text-[#8A887F]">
                    <p>© 2026 BlockVault. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}