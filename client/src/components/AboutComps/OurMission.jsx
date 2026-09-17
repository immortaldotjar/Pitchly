import { motion } from "motion/react";

const stats = [
    { value: "500+", label: "Startups Launched" },
    { value: "$2M+", label: "Capital Raised" },
];

const OurMission = () => {
    return (
        <div className="py-section_gap px-margin_mobile md:px-margin_desktop">
            <div className="max-w-max_width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Mission</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                        We believe that the barrier to entry for great ideas should be as low as
                        possible. Our mission is to democratize the startup ecosystem by providing
                        every founder with the tools, network, and visibility they need to succeed in
                        a competitive landscape.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-surface-container-low border border-outline-variant/30 rounded-xl px-5 py-3"
                            >
                                <p className="font-numeric-data text-headline-md text-primary">{stat.value}</p>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default OurMission;