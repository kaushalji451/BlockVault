
import {
    Network,
    KeyRound, DatabaseZap, UserCheck,
} from 'lucide-react';

export default function SecuritySection() {
    const points = [
        { icon: KeyRound, title: 'End-to-end file protection', description: 'Files are encrypted on your device before upload and stay encrypted in transit.' },
        { icon: DatabaseZap, title: 'Encrypted storage', description: 'Stored data remains encrypted at rest across every storage node.' },
        { icon: UserCheck, title: 'Controlled access', description: 'Only you and the parties you authorize can request a decryption key.' },
        { icon: Network, title: 'Distributed architecture', description: 'No single node holds a complete copy of any file you store.' },
    ];
    return (
        <section className="border-b border-[#E5E2D9] bg-[#F5F2EA]">
            <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-16">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-[#1C1C1A] sm:text-[2rem]" style={{ fontFamily: 'Manrope, sans-serif' }}>Security at every layer.</h2>
                        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#57564F]">
                            BlockVault's security model doesn't rely on any single safeguard. Encryption, access control, and distribution work together so a failure in one layer doesn't compromise your files.
                        </p>
                        <dl className="mt-10 grid gap-6 sm:grid-cols-2">
                            {points.map(({ icon: Icon, title, description }) => (
                                <div key={title} className="flex gap-3.5">
                                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#E5E2D9] bg-white text-[#1F4B44]">
                                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                                    </div>
                                    <div>
                                        <dt className="text-[14.5px] font-semibold text-[#1C1C1A]">{title}</dt>
                                        <dd className="mt-1 text-[13.5px] leading-relaxed text-[#57564F]">{description}</dd>
                                    </div>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className="rounded-xl border border-[#E5E2D9] bg-[#FAF8F3] p-6 sm:p-7">
                        <div className="flex flex-col items-center">
                            <div className="w-full max-w-[220px] rounded-lg border border-[#E5E2D9] bg-white px-4 py-3 text-center shadow-sm">
                                <p className="font-mono text-[12px] tracking-wide text-[#57564F]">FILE</p>
                            </div>
                            <div className="h-8 w-px bg-[#E5E2D9]" />
                            <div className="w-full max-w-[220px] rounded-lg border border-[#1F4B44]/30 bg-[#EAF0EE] px-4 py-3 text-center">
                                <p className="font-mono text-[12px] tracking-wide text-[#163832]">ENCRYPTED</p>
                            </div>
                            <div className="h-8 w-px bg-[#E5E2D9]" />
                            <div className="w-full max-w-[260px] rounded-lg border border-[#E5E2D9] bg-white px-4 py-4 text-center shadow-sm">
                                <p className="font-mono text-[12px] tracking-wide text-[#57564F]">STORAGE NODES</p>
                                <div className="mt-3 grid grid-cols-3 gap-2">
                                    {[1, 2, 3].map((n) => (
                                        <div key={n} className="flex h-10 items-center justify-center rounded-md border border-[#EEEBE2] bg-[#FAF8F3]">
                                            <div className="h-2 w-2 rounded-full bg-[#1F4B44]/70" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}