import { motion } from "motion/react"

const days = [
    { label: "MON", value: 40 },
    { label: "TUE", value: 60 },
    { label: "WED", value: 45 },
    { label: "THU", value: 92 },
    { label: "FRI", value: 38 },
    { label: "SAT", value: 72 },
    { label: "SUN", value: 42 },
]

const EngagementChart = () => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Investor Engagement</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Click-through and session length this week</p>
                </div>
            </div>

            <div className="flex items-end justify-between gap-2 h-48">
                {days.map((day, i) => (
                    <div key={day.label} className="flex-1 flex flex-col items-center gap-1.5">
                        <div className="w-full flex items-end justify-center gap-0.5 h-full">
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${day.value}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className={`w-2.5 rounded-t-sm ${day.value > 85 ? "bg-primary" : "bg-primary/25"}`}
                            />
                        </div>
                        <span className="font-label-caps text-[10px] text-on-surface-variant">{day.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EngagementChart