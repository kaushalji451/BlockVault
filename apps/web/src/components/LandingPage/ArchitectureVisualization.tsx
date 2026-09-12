
import {
    Server, Lock, Boxes,
} from 'lucide-react';

export default function ArchitectureVisualization() {
    const nodes = ['Node A', 'Node B', 'Node C'];
    return (
        <section className="border-b border-[#E5E2D9]">
            <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold tracking-tight text-[#1C1C1A] sm:text-[2rem]" style={{ fontFamily: 'Manrope, sans-serif' }}>Storage built differently.</h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#57564F]">Instead of writing your file to one location, BlockVault encrypts it once and distributes the result across a network of independent storage nodes.</p>
                </div>
                <div className="mx-auto mt-14 max-w-2xl">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 rounded-lg border border-[#E5E2D9] bg-white px-5 py-3 shadow-sm">
                            <Boxes className="h-4 w-4 text-[#1F4B44]" strokeWidth={1.75} />
                            <span className="text-[14px] font-bold text-[#1C1C1A]" style={{ fontFamily: 'Manrope, sans-serif' }}>BlockVault</span>
                        </div>
                        <div className="h-8 w-px bg-[#E5E2D9]" />
                        <div className="flex items-center gap-2 rounded-lg border border-[#E5E2D9] bg-[#FAF8F3] px-5 py-3">
                            <Lock className="h-4 w-4 text-[#57564F]" strokeWidth={1.75} />
                            <span className="text-[13.5px] font-medium text-[#57564F]">Encryption layer</span>
                        </div>
                        <div className="relative h-10 w-full max-w-md">
                            <svg viewBox="0 0 400 40" className="absolute left-0 top-0 h-full w-full text-[#E5E2D9]" preserveAspectRatio="none">
                                <path d="M200 0 V14 M40 14 H360 M40 14 V38 M200 14 V38 M360 14 V38" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <div className="grid w-full grid-cols-3 gap-4 sm:gap-6">
                            {nodes.map((node) => (
                                <div key={node} className="flex flex-col items-center gap-2 rounded-full border border-[#E5E2D9] bg-white px-3 py-5 text-center shadow-sm sm:px-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EEEBE2] bg-[#FAF8F3] text-[#1F4B44]">
                                        <Server className="h-4 w-4" strokeWidth={1.75} />
                                    </div>
                                    <span className="text-[12.5px] font-medium text-[#1C1C1A]">{node}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
