import { MdBookmarkBorder, MdAddCircleOutline, MdArrowForward, MdMoreHoriz } from "react-icons/md"

const badgeTone = {
    Trending: "bg-emerald-50 text-emerald-600",
    "High Momentum": "bg-tertiary-fixed text-on-tertiary-fixed",
}

const StartupCard = ({ startup, onBookmark, onCompare }) => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden mb-6 break-inside-avoid">
            {startup.image && (
                <img src={startup.image} alt={startup.name} className="w-full h-40 object-cover" />
            )}

            <div className="p-5 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                        {!startup.image && (
                            <button onClick={() => onCompare?.(startup.id)} className="text-on-surface-variant">
                                <MdAddCircleOutline size={18} />
                            </button>
                        )}
                        {startup.badge && (
                            <span className={`px-2.5 py-1 rounded-full font-label-caps text-[10px] font-bold uppercase tracking-wide ${badgeTone[startup.badge] ?? "bg-surface-container-low text-on-surface-variant"}`}>
                                {startup.badge}
                            </span>
                        )}
                        {startup.activity && (
                            <span className="font-body-sm text-[11px] text-on-surface-variant">{startup.activity}</span>
                        )}
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                        <button onClick={() => onBookmark?.(startup.id)} className="text-on-surface-variant">
                            <MdBookmarkBorder size={18} />
                        </button>
                        {!startup.image && !startup.badge && (
                            <button className="text-on-surface-variant">
                                <MdMoreHoriz size={18} />
                            </button>
                        )}
                    </div>
                </div>

                <div>
                    <h4 className="font-headline-md text-body-md font-bold text-on-surface">{startup.name}</h4>
                    {(startup.category || startup.stage) && (
                        <p className="font-body-sm text-[11px] text-primary font-semibold">
                            {[startup.category, startup.stage].filter(Boolean).join(" • ")}
                        </p>
                    )}
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant">{startup.description}</p>

                {startup.funding && (
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <span className="font-body-sm text-[11px] text-on-surface-variant">Funding Goal: {startup.funding.goal}</span>
                            <span className="font-body-sm text-[11px] font-bold text-primary">{startup.funding.raisedPercent}% Raised</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-outline-variant/30 overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${startup.funding.raisedPercent}%` }} />
                        </div>
                    </div>
                )}

                {startup.founder && (
                    <div className="flex items-center gap-2">
                        <img src={startup.founder.avatar} alt={startup.founder.name} className="w-7 h-7 rounded-full object-cover" />
                        <span className="font-body-sm text-[12px] text-on-surface-variant">{startup.founder.name}</span>
                    </div>
                )}

                {startup.founders && (
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex -space-x-2">
                                {startup.founders.map((founder, i) => (
                                    <img key={i} src={founder.avatar} alt="" className="w-7 h-7 rounded-full object-cover border-2 border-surface" />
                                ))}
                            </div>
                            <span className="font-body-sm text-[11px] text-on-surface-variant">{startup.membersLabel}</span>
                        </div>
                        {startup.fundingTargetLabel && (
                            <p className="font-body-sm text-[11px] text-primary font-semibold mt-1">{startup.fundingTargetLabel}</p>
                        )}
                    </div>
                )}

                {startup.location && (
                    <div className="flex items-center justify-between pt-1">
                        <span className="font-body-sm text-[11px] text-on-surface-variant">{startup.location}</span>
                        <button className="flex items-center gap-1 font-body-sm text-[11px] font-bold text-primary">
                            Profile <MdArrowForward size={14} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default StartupCard