export default function StatsSection() {
    const stats = [
        { label: 'Security', value: 'Encrypted storage' },
        { label: 'Architecture', value: 'Distributed' },
        { label: 'Access', value: 'Controlled' },
        { label: 'Availability', value: 'Reliable retrieval' },
    ];
    return (
        <section className="border-b border-[#E5E2D9] bg-white">
            <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
                    {stats.map((stat, i) => (
                        <div key={stat.label} className={`px-1 sm:px-6 ${i > 0 ? 'sm:border-l sm:border-[#E5E2D9]' : ''}`}>
                            <p className="text-[13px] text-[#8A887F]">{stat.label}</p>
                            <p className="mt-1.5 text-lg font-bold text-[#1C1C1A]" style={{ fontFamily: 'Manrope, sans-serif' }}>{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}