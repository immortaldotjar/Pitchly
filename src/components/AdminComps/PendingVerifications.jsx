const verifications = [
    { initial: "N", color: "bg-primary/15 text-primary", name: "NexGen Analytics", tier: "Tier 1 • Series A", founder: "Sarah Jenkins", industry: "AI & ML", date: "Oct 24, 2023" },
    { initial: "F", color: "bg-tertiary-fixed text-on-tertiary-fixed", name: "FlowState", tier: "Tier 2 • Seed", founder: "Marcus Thorne", industry: "SaaS", date: "Oct 22, 2023" },
    { initial: "B", color: "bg-primary/15 text-primary", name: "BlueBridge Logistics", tier: "Tier 1 • Series B", founder: "David Chen", industry: "Logistics", date: "Oct 20, 2023" },
]

const PendingVerifications = () => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 pb-4">
                <div>
                    <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Pending Startup Verifications</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">42 startups awaiting due diligence approval.</p>
                </div>
                <button className="font-body-sm text-body-sm text-primary font-semibold">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-surface-container-low text-left">
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Startup Name</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Founder</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Industry</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Date Submitted</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {verifications.map((item) => (
                            <tr key={item.name} className="border-t border-outline-variant/30">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className={`w-9 h-9 rounded-lg center font-bold text-body-sm shrink-0 ${item.color}`}>
                                            {item.initial}
                                        </span>
                                        <div>
                                            <p className="font-body-sm text-body-sm font-bold text-on-surface">{item.name}</p>
                                            <p className="font-body-sm text-[11px] text-on-surface-variant">{item.tier}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface">{item.founder}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2.5 py-1 rounded-full bg-surface-container-low font-body-sm text-[11px] font-semibold text-on-surface-variant">
                                        {item.industry}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant">{item.date}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="px-4 py-1.5 rounded-lg bg-primary text-on-primary font-body-sm text-[11px] font-bold">
                                            Approve
                                        </button>
                                        <button className="px-4 py-1.5 rounded-lg bg-error-container text-error font-body-sm text-[11px] font-bold">
                                            Reject
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PendingVerifications