import { motion } from "motion/react"
import { funnelStages } from "../../../config/adminReportsConfig"

const ConversionFunnel = () => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6">
            <h4 className="font-headline-md text-body-lg font-bold text-on-surface">User Conversion Funnel</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">From signup to an active deal room, last 90 days</p>

            <div className="space-y-4">
                {funnelStages.map((stage, i) => (
                    <div key={stage.label} className="flex items-center gap-4">
                        <span className="w-44 shrink-0 font-body-sm text-body-sm text-on-surface-variant">{stage.label}</span>

                        <div className="flex-1 h-9 rounded-lg bg-surface-container-low overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${stage.percent}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="h-full bg-primary rounded-lg center px-3"
                                style={{ minWidth: "3rem" }}
                            >
                                <span className="font-numeric-data text-[12px] font-bold text-on-primary whitespace-nowrap">
                                    {stage.value.toLocaleString()}
                                </span>
                            </motion.div>
                        </div>

                        <span className="w-12 shrink-0 text-right font-numeric-data text-body-sm font-bold text-on-surface">{stage.percent}%</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ConversionFunnel