import { motion } from "motion/react"
import { fundingByIndustry } from "../../../config/adminReportsConfig"

const FundingByIndustry = () => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6">
            <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Capital Raised by Industry</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Total funding secured this quarter</p>

            <div className="space-y-5">
                {fundingByIndustry.map((industry, i) => (
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

export default FundingByIndustry