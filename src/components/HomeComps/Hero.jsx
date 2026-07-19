import { motion } from "motion/react";
import { MdRocketLaunch } from "react-icons/md";
import Button from "./Button";

const heroStats = [
    { label: "FUNDING", value: "$4.2M" },
    { label: "SCORE", value: "94/100" },
    { label: "REACH", value: "12k+" },
];

export default function Hero() {
    return (
        <section className="min-h-screen center px-margin_mobile md:px-margin_desktop max-w-max_width mx-auto">
            <div className="grid grid-cols-12 gap-gutter items-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="col-span-12 lg:col-span-6 space-y-8"
                >
                    <h1 className="font-display text-display leading-tight text-on-surface">
                        Pitchly: Where Ideas Meet Opportunity.
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                        The premium network for founders to build their startup profile, manage pitch
                        decks, and connect with a world-class mentor and investor network.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button variant="primary" className="px-8 py-4 rounded-[14px]">Create Startup</Button>
                        <Button variant="secondary" className="px-8 py-4 rounded-[14px]">Explore Startups</Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="col-span-12 lg:col-span-6 mt-12 lg:mt-0 relative"
                >
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-[20px] p-6 shadow-editorial rotate-1 scale-105">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 center text-primary">
                                    <MdRocketLaunch size={20} />
                                </div>
                                <div>
                                    <h4 className="font-headline-md text-body-md font-bold">Lumina Bio</h4>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">Series A • Biotech</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-label-caps text-label-caps">
                                Hiring
                            </span>
                        </div>

                        <div className="space-y-6">
                            <div className="h-[2px] bg-outline-variant relative">
                                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface" />
                                <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface" />
                                <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-4 h-4 bg-outline-variant rounded-full border-4 border-surface" />
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-outline-variant rounded-full border-4 border-surface" />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {heroStats.map((stat) => (
                                    <div key={stat.label} className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
                                        <p className="font-label-caps text-label-caps text-on-surface-variant">{stat.label}</p>
                                        <p className="font-numeric-data text-headline-md text-primary">{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="w-full h-40 bg-cover bg-center rounded-xl"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80')" }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}