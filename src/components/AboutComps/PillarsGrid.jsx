import { motion } from "motion/react";

const pillars = [
    {
        title: "Innovation grows through collaboration",
        description:
            "We foster an environment where sharing knowledge is the primary driver of technological advancement.",
    },
    {
        title: "Every startup deserves visibility",
        description:
            "Merit should be the only metric. We ensure great products get the attention they deserve from the right people.",
    },
    {
        title: "Mentorship creates stronger founders",
        description:
            "Guidance from those who have walked the path before is invaluable for sustainable business growth.",
    },
    {
        title: "Connections create opportunities",
        description:
            "A single introduction can change the trajectory of a company. We facilitate those life-changing moments.",
    },
];

const PillarsGrid = () => {
    return (
        <section className="pb-section_gap px-margin_mobile md:px-margin_desktop">
            <div className="max-w-max_width mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((pillar, i) => (
                    <motion.div
                        key={pillar.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        whileHover={{ y: -4 }}
                        className="bg-surface border border-outline-variant rounded-2xl p-6 space-y-2"
                    >
                        <h4 className="font-headline-md text-body-md font-bold text-on-surface">{pillar.title}</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PillarsGrid;