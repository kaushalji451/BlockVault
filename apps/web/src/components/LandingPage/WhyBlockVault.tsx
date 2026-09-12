import { Lock, Network, ShieldCheck } from "lucide-react";

export default function WhyBlockVault() {
  const features = [
    { icon: Lock, title: 'Secure', description: 'Protect files with encryption and controlled access, from upload through retrieval.' },
    { icon: Network, title: 'Distributed', description: 'Files are split and distributed across storage infrastructure rather than relying on a single location.' },
    { icon: ShieldCheck, title: 'Reliable', description: 'Designed for dependable storage and retrieval, so your files are there when you need them.' },
  ];
  return (
    <section className="border-b border-[#E5E2D9]">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#1C1C1A] sm:text-[2rem]" style={{ fontFamily: 'Manrope, sans-serif' }}>Why BlockVault?</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#57564F]">Three principles guide how BlockVault stores and protects every file you upload.</p>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className={`pt-6 sm:pt-0 ${i > 0 ? 'border-t border-[#E5E2D9] sm:border-t-0 sm:border-l sm:pl-8' : ''}`}>
              <Icon className="h-5 w-5 text-[#1F4B44]" strokeWidth={1.75} />
              <h3 className="mt-4 text-lg font-bold text-[#1C1C1A]" style={{ fontFamily: 'Manrope, sans-serif' }}>{title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#57564F]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}