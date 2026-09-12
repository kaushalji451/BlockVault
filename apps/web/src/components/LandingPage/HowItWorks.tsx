
import {
    ShieldCheck,
    Upload, Share2, Download,
} from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        { number: '01', icon: Upload, title: 'Upload', description: 'Select a file from your device to begin the storage process.' },
        { number: '02', icon: ShieldCheck, title: 'Encrypt', description: 'The file is encrypted locally before any data is transmitted.' },
        { number: '03', icon: Share2, title: 'Distribute', description: 'Encrypted data is split and stored across independent nodes.' },
        { number: '04', icon: Download, title: 'Retrieve', description: 'Reassemble and decrypt your file on demand, from anywhere.' },
    ];
    return (
        <section className="border-b border-[#E5E2D9] bg-white">
            <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold tracking-tight text-[#1C1C1A] sm:text-[2rem]" style={{ fontFamily: 'Manrope, sans-serif' }}>How it works</h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#57564F]">Every file follows the same four-step path, from your device to distributed storage and back.</p>
                </div>
                <ol className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {steps.map(({ number, icon: Icon, title, description }, i) => (
                        <li key={number} className={`relative py-6 sm:py-0 ${i !== 0 ? 'border-t border-[#E5E2D9] sm:border-t-0 sm:border-l sm:pl-6' : ''}`}>
                            <span className="font-mono text-[13px] text-[#8A887F]">{number}</span>
                            <div className="mt-3 flex h-9 w-9 items-center justify-center rounded-md border border-[#E5E2D9] bg-[#FAF8F3] text-[#1F4B44]">
                                <Icon className="h-4 w-4" strokeWidth={1.75} />
                            </div>
                            <h3 className="mt-4 text-base font-bold text-[#1C1C1A]" style={{ fontFamily: 'Manrope, sans-serif' }}>{title}</h3>
                            <p className="mt-1.5 text-[14px] leading-relaxed text-[#57564F]">{description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}