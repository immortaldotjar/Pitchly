import { motion } from "motion/react";
import { MdArrowForward, MdTrendingUp } from "react-icons/md";

const Stories = () => {
    return (
        <section className="py-section_gap px-margin_mobile md:px-margin_desktop">
            <div className="max-w-max_width mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div className="space-y-2">
                        <h2 className="font-headline-lg text-headline-lg text-on-surface">
                            Impact beyond the pitch.
                        </h2>
                    </div>
                    <button className="hidden sm:flex items-center gap-2 font-body-sm text-body-sm text-primary font-semibold">
                        View All Stories <MdArrowForward size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="bg-surface border border-outline-variant rounded-2xl overflow-hidden flex flex-col"
                    >
                        <div className="h-56 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
                                alt="Sarah Chen presenting to a room"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col gap-4 flex-1">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                                    alt="Sarah Chen"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-body-md text-body-md font-bold text-on-surface">Sarah Chen</p>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">CEO, Orbit Systems</p>
                                </div>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant italic">
                                "Pitchly helped us find our lead investor within 3 weeks of joining. The
                                quality of mentorship here is unparalleled in the startup space."
                            </p>
                            <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1.5 rounded-full bg-surface-container-low font-body-sm text-body-sm font-semibold text-on-surface">
                                <MdTrendingUp className="text-primary" size={16} /> Raised $2.4M Seed Round
                            </span>
                        </div>
                    </motion.div>
                    <div className="flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-surface border border-outline-variant rounded-2xl p-6 flex-1 flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80"
                                    alt="Marcus Thorne"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-body-md text-body-md font-bold text-on-surface">Marcus Thorne</p>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">Founder, GreenGrid</p>
                                </div>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant italic">
                                "The structured networking sessions on Pitchly are a game changer. I met
                                three of my current advisors here."
                            </p>
                            <a href="#" className="font-body-sm text-body-sm text-primary font-semibold hover:underline">
                                Read Case Study
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-primary text-on-primary rounded-2xl p-6 flex-1 flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80"
                                    alt="Elena Rodriguez"
                                    className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                                />
                                <div>
                                    <p className="font-body-md text-body-md font-bold text-on-primary">Elena Rodriguez</p>
                                    <p className="font-body-sm text-body-sm text-on-primary/70">Managing Partner, V-Ventures</p>
                                </div>
                            </div>
                            <p className="font-body-md text-body-md text-on-primary/80 italic">
                                "We've shifted 40% of our deal flow discovery to Pitchly. The transparency
                                of data makes our job significantly more efficient."
                            </p>
                            <a href="#" className="font-body-sm text-body-sm text-on-primary font-semibold underline w-fit">
                                Partner Insights
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stories
