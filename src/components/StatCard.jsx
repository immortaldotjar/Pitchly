const StatCard = ({ icon: Icon, label, value, trend, badge, badgeTone }) => {

    const badgeStyles = {
        critical: "bg-error-container text-error",
        action: "bg-tertiary-fixed text-on-tertiary-fixed",
    }

    return (
        <div className={`bg-surface border border-outline-variant rounded-2xl p-5 space-y-4 ${badgeTone ? `border-l-4 ${badgeTone === "critical" ? "border-l-error" : "border-l-tertiary"}` : ""
            }`}>
            <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary center">
                    <Icon size={20} />
                </div>

                {trend && (
                    <span className="font-body-sm text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                        {trend}
                    </span>
                )}

                {badge && (
                    <span className={`font-label-caps text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${badgeStyles[badgeTone]}`}>
                        {badge}
                    </span>
                )}
            </div>

            <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wide">{label}</p>
                <p className="font-numeric-data text-headline-lg text-on-surface mt-1">{value}</p>
            </div>
        </div>
    )
}

export default StatCard