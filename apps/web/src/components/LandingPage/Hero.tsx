import Btn from "./Btn";
import ProductVisualization from "./ProductVisualization";

export default function Hero() {
    return (
        <section className="border-b border-[#E5E2D9]">
            <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
                <div>
                    <h1 className="text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-[#1C1C1A] sm:text-[3.1rem] lg:text-[3.4rem]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        Your files.<br />Your control.<br />Your vault.
                    </h1>
                    <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[#57564F]">
                        Secure distributed storage for your important files.
                    </p>
                    <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#57564F]">
                        BlockVault encrypts every file before it leaves your device, then spreads the encrypted data across independent storage nodes. No single server holds a complete, readable copy of anything you store.
                    </p>
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Btn variant="primary" className="px-6 py-3 text-[15px]">Get Started</Btn>
                        <Btn variant="secondary" className="px-6 py-3 text-[15px]">Learn More</Btn>
                    </div>
                </div>
                <ProductVisualization />
            </div>
        </section>
    );
}