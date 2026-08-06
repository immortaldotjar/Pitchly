import { motion } from "motion/react";
import { MdVisibility, MdLightbulbOutline, MdGroups, MdAccessibility, MdSecurity, MdTrendingUp } from "react-icons/md";

const values = [
    {
        icon: MdVisibility,
        title: "Transparency",
        description: "Open communication and clear data privacy are the foundation of our network.",
    },
    {
        icon: MdLightbulbOutline,
        title: "Innovation",
        description: "We constantly push the boundaries of how tech platforms can serve entrepreneurs.",
    },
    {
        icon: MdGroups,
        title: "Community",
        description: "Building together is better. We prioritize the collective success of our users.",
    },
    {
        icon: MdAccessibility,
        title: "Accessibility",
        description: "Lowering barriers to ensure quality ideas can come from anywhere in the world.",
    },
    {
        icon: MdSecurity,
        title: "Security",
        description: "Enterprise-grade protection for your sensitive startup data and IP.",
    },
    {
        icon: MdTrendingUp,
        title: "Continuous Improvement",
        description: "We iterate rapidly based on user feedback to provide the best possible experience.",
    },
];

const CoreValues = () => {
    return (
        <section className="py-section_gap px-margin_mobile md:px-margin_desktop">
            <div className="max-w-max_width mx-auto">
                <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-16">
                    Our Core Values
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            whileHover={{ y: -4 }}
                            className="bg-surface border border-outline-variant rounded-2xl p-6 space-y-3"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary center">
                                <value.icon size={20} />
                            </div>
                            <h4 className="font-headline-md text-body-md font-bold text-on-surface">{value.title}</h4>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;