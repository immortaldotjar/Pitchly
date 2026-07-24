import { motion } from "motion/react";

const stats = [
    { value: "5000+", label: "Verified Founders" },
    { value: "$200M+", label: "Capital Raised" },
    { value: "1200+", label: "Active Mentors" },
];

export default function Stats() {
    return (
        <section className="py-section_gap px-margin_mobile md:px-margin_desktop bg-surface-container-lowest">
            <div className="max-w-max_width mx-auto">
                <div className="grid grid-cols-1 justify-around md:flex gap-12 text-center md:text-left">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="space-y-2 border-l-4 border-primary pl-10"
                        >
                            <h3 className="font-numeric-data text-[56px] leading-none text-primary">{stat.value}</h3>
                            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}