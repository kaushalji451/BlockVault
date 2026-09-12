import { FileArchive, ShieldCheck, Server } from "lucide-react";

export default function ProductVisualization() {
    const nodes = [{ label: 'Node A', region: 'us-east' }, { label: 'Node B', region: 'eu-west' }, { label: 'Node C', region: 'ap-south' }];
    return (
        <div className="rounded-xl border border-[#E5E2D9] bg-white p-6 shadow-[0_1px_3px_rgba(28,28,26,0.06)] sm:p-7">
            <div className="flex items-center gap-3 rounded-lg border border-[#EEEBE2] bg-[#FAF8F3] px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white border border-[#E5E2D9] text-[#57564F]">
                    <FileArchive className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                    <p className="truncate font-mono text-[13px] text-[#1C1C1A]">project.zip</p>
                    <p className="text-[12px] text-[#8A887F]">24.8 MB</p>
                </div>
                <span className="ml-auto rounded border border-[#EEEBE2] bg-white px-2 py-1 font-mono text-[11px] text-[#8A887F]">local</span>
            </div>
            <div className="flex justify-start pl-8 py-2"><div className="h-6 w-px bg-[#E5E2D9]" /></div>
            <div className="flex items-center gap-3 rounded-lg border border-[#1F4B44]/25 bg-[#EAF0EE] px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#1F4B44] text-[#FAF8F3]">
                    <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                    <p className="text-[13px] font-medium text-[#1C1C1A]">AES-256 encryption</p>
                    <p className="text-[12px] text-[#57564F]">Applied before upload</p>
                </div>
            </div>
            <div className="relative h-10">
                <svg viewBox="0 0 260 40" className="absolute left-0 top-0 h-full w-full text-[#E5E2D9]" preserveAspectRatio="none">
                    <path d="M32 0 V14 H35 M32 0 V14 M32 14 H228 M35 14 V38 M130 14 V38 M228 14 V38" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {nodes.map((n) => (
                    <div key={n.label} className="flex flex-col items-center gap-1.5 rounded-lg border border-[#EEEBE2] bg-[#FAF8F3] px-2 py-3 text-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E5E2D9] bg-white text-[#57564F]">
                            <Server className="h-3.5 w-3.5" />
                        </div>
                        <p className="text-[12px] font-medium text-[#1C1C1A]">{n.label}</p>
                        <p className="font-mono text-[10.5px] text-[#8A887F]">{n.region}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
