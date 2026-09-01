import { motion } from "motion/react";

const milestones = [
    {
        number: "01",
        title: "The Idea",
        description: "Conceived in late 2023 to bridge the gap between regional founders and global venture capital.",
    },
    {
        number: "02",
        title: "Design Phase",
        description: "Focusing on high-density information design and professional user experience.",
    },
    {
        number: "03",
        title: "Development",
        description: "Building a robust, scalable architecture using modern web technologies.",
    },
    {
        number: "04",
        title: "Community Launch",
        description: "Onboarding the first 100 startups and active mentors to the platform.",
    },
    {
        number: "05",
        title: "Future Growth",
        description: "Expanding our reach and introducing AI-powered matchmaking and analytics.",
        active: true,
    },
];

const JourneyTimeline = () => {
    return (
        <div className="py-section_gap px-margin_mobile md:px-margin_desktop bg-surface-container-low">
            <div className="max-w-2xl mx-auto">
                <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-16">
                    The Journey So Far
                </h2>

                <div className="relative">
                    <div className="absolute left-4 top-3 bottom-3 w-px bg-outline-variant" />

                    <div className="space-y-10">
                        {milestones.map((milestone, i) => (
                            <motion.div
                                key={milestone.number}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="relative flex gap-6"
                            >
                                <span
                                    className={`relative z-10 w-8 h-8 rounded-full center font-numeric-data text-[11px] font-bold shrink-0 ${milestone.active
                                        ? "bg-primary text-on-primary"
                                        : "bg-surface border border-outline-variant text-on-surface-variant"
                                        }`}
                                >
                                    {milestone.number}
                                </span>

                                <div className="pb-1">
                                    <h4 className="font-headline-md text-body-md font-bold text-on-surface">{milestone.title}</h4>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">{milestone.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JourneyTimeline;