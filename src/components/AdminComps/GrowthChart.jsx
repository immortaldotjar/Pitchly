import { motion } from "motion/react"

const months = [
    { label: "JAN", users: 30, startups: 22 },
    { label: "FEB", users: 34, startups: 25 },
    { label: "MAR", users: 38, startups: 28 },
    { label: "APR", users: 42, startups: 32 },
    { label: "MAY", users: 48, startups: 36 },
    { label: "JUN", users: 55, startups: 42 },
    { label: "JUL", users: 62, startups: 48 },
    { label: "AUG", users: 58, startups: 52 },
    { label: "SEP", users: 82, startups: 60 },
    { label: "OCT", users: 78, startups: 66 },
    { label: "NOV", users: 92, startups: 70 },
]

const shownLabels = ["JAN", "MAR", "MAY", "JUL", "SEP", "NOV"]

const GrowthChart = () => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h4 className="font-headline-md text-body-lg font-bold text-on-surface">User & Startup Growth</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Year-over-year ecosystem expansion</p>
                </div>

                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 font-body-sm text-[11px] text-on-surface-variant">
                        <span className="w-2 h-2 rounded-full bg-primary" /> Users
                    </span>
                    <span className="flex items-center gap-1.5 font-body-sm text-[11px] text-on-surface-variant">
                        <span className="w-2 h-2 rounded-full bg-primary/30" /> Startups
                    </span>
                </div>
            </div>

            <div className="flex items-end justify-between gap-2 h-48">
                {months.map((month, i) => (
                    <div key={month.label} className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full flex items-end justify-center gap-0.5 h-full">
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${month.users}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.04 }}
                                className={`w-2.5 rounded-t-sm ${i >= 8 ? "bg-primary" : "bg-primary/25"}`}
                            />
                        </div>
                        {shownLabels.includes(month.label) && (
                            <span className="font-label-caps text-[10px] text-on-surface-variant">{month.label}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GrowthChart