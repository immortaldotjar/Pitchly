import { motion } from "motion/react"

const checklist = [
    { name: "Startup Details", percent: 100 },
    { name: "Pitch Deck", percent: 100 },
    { name: "Team Members", percent: 100 },
    { name: "Financials", percent: 60 },
    { name: "Verification", percent: 40 },
]

const ProfileChecklist = () => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6">
            <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Profile Checklist</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Complete every section to reach 100%</p>

            <div className="space-y-5">
                {checklist.map((item, i) => (
                    <div key={item.name}>
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="font-body-sm text-body-sm font-semibold text-on-surface">{item.name}</span>
                            <span className="font-numeric-data text-body-sm text-on-surface-variant">{item.percent}%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-outline-variant/30 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.percent}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                                className="h-full bg-primary rounded-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileChecklist