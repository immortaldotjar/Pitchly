import { motion } from "motion/react"

const industries = [
    { name: "AI & ML", value: 342, percent: 100 },
    { name: "FinTech", value: 215, percent: 63 },
    { name: "HealthTech", value: 180, percent: 53 },
    { name: "SaaS", value: 128, percent: 37 },
    { name: "PropTech", value: 92, percent: 27 },
]

const IndustryDistribution = () => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6">
            <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Industry Distribution</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Startup categories by volume</p>

            <div className="space-y-5">
                {industries.map((industry, i) => (
                    <div key={industry.name}>
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="font-body-sm text-body-sm font-semibold text-on-surface">{industry.name}</span>
                            <span className="font-numeric-data text-body-sm text-on-surface-variant">{industry.value}</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-outline-variant/30 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${industry.percent}%` }}
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

export default IndustryDistribution