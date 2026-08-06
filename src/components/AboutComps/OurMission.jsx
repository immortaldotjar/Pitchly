import { motion } from "motion/react";

const stats = [
    { value: "500+", label: "Startups Launched" },
    { value: "$2M+", label: "Capital Raised" },
];

const OurMission = () => {
    return (
        <section className="py-section_gap px-margin_mobile md:px-margin_desktop">
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

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="rounded-2xl border border-outline-variant overflow-hidden bg-surface shadow-editorial"
                >
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-surface-container-low border-b border-outline-variant/30">
                        <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                        <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                        <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                        alt="Pitchly dashboard on a desktop monitor"
                        className="w-full h-64 object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default OurMission;