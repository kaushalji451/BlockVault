import Btn from "./Btn";

export default function CTASection() {
    return (
        <section className="border-b border-[#E5E2D9]">
            <div className="mx-auto max-w-[1240px] px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-[#1C1C1A] sm:text-[2.1rem]" style={{ fontFamily: 'Manrope, sans-serif' }}>Start securing your files.</h2>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-[#57564F]">Keep your important files protected, distributed, and under your control.</p>
                <div className="mt-8 flex justify-center">
                    <Btn variant="primary" className="px-7 py-3 text-[15px]">Get Started</Btn>
                </div>
            </div>
        </section>
    );
}