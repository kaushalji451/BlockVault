import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import Btn from "./LandingPage/Btn";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const location = useLocation();

    const isLandingPage = location.pathname === "/";

    const links = [
        {
            label: "Features",
            href: "#features",
        },
        {
            label: "Security",
            href: "#security",
        },
        {
            label: "How It Works",
            href: "#how-it-works",
        },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-[#E5E2D9] bg-[#FAF8F3]/95 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-6 lg:px-8">

                <Link to="/">
                    <Logo />
                </Link>

                {/* Landing page links only */}
                {isLandingPage && (
                    <ul className="hidden items-center gap-8 md:flex">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-[14.5px] text-[#57564F] hover:text-[#1C1C1A]"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="hidden items-center gap-3 md:flex">
                    <Link to="/login">
                        <Btn variant="ghost">
                            Login
                        </Btn>
                    </Link>

                    <Link to="/signup">
                        <Btn variant="primary">
                            Get Started
                        </Btn>
                    </Link>
                </div>

                <button
                    className="inline-flex items-center justify-center rounded-md border border-[#E5E2D9] p-2 md:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {open ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="border-t border-[#E5E2D9] bg-[#FAF8F3] px-5 pb-6 pt-2 md:hidden">

                    {isLandingPage && (
                        <ul className="flex flex-col gap-1">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-md px-2 py-2.5 text-[15px] text-[#57564F]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="mt-3 flex flex-col gap-2 border-t border-[#E5E2D9] pt-4">

                        <Link
                            to="/login"
                            onClick={() => setOpen(false)}
                        >
                            <Btn
                                variant="secondary"
                                className="w-full"
                            >
                                Login
                            </Btn>
                        </Link>

                        <Link
                            to="/signup"
                            onClick={() => setOpen(false)}
                        >
                            <Btn
                                variant="primary"
                                className="w-full"
                            >
                                Get Started
                            </Btn>
                        </Link>

                    </div>
                </div>
            )}
        </header>
    );
}