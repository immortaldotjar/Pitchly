import { motion } from "motion/react";
import { MdCheckCircle } from "react-icons/md";

const steps = [
    { number: 1, label: "Verify Identity & Vision", active: true },
    { number: 2, label: "Build Dynamic Data Room", active: false },
    { number: 3, label: "Smart Investor Matching", active: false },
];

export default function HowItWorks() {
    return (
        <section className="py-section_gap px-margin_mobile md:px-margin_desktop bg-surface-container-low overflow-hidden">
            <div className="max-w-max_width mx-auto">
                <div className="grid grid-cols-12 gap-gutter">
                    <div className="col-span-12 lg:col-span-5 mb-16 lg:mb-0">
                        <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">
                            The Modern Founder's Journey.
                        </h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                            We provide the structural scaffolding to take you from a raw concept to a
                            venture-backed reality.
                        </p>

                        <div className="space-y-4">
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    className={`flex items-center gap-4 p-4 rounded-xl border border-outline-variant/30 ${step.active ? "bg-white shadow-editorial" : ""
                                        }`}
                                >
                                    <span
                                        className={`w-10 h-10 rounded-full center font-bold ${step.active
                                            ? "bg-primary text-on-primary"
                                            : "border border-outline-variant text-on-surface-variant"
                                            }`}
                                    >
                                        {step.number}
                                    </span>
                                    <span
                                        className={`font-body-md text-body-md font-semibold ${step.active ? "" : "text-on-surface-variant"
                                            }`}
                                    >
                                        {step.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="col-span-12 lg:col-span-7 relative"
                    >
                        <div className="relative z-10 p-1 bg-outline-variant rounded-[32px]">
                            <div className="bg-white rounded-[31px] p-8 lg:p-12 h-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <div className="h-1 bg-primary w-12 mb-4" />
                                        <h3 className="font-headline-md text-headline-md">Smart Matchmaking</h3>
                                        <p className="font-body-md text-body-md text-on-surface-variant">
                                            Our proprietary algorithm analyzes your sector, stage, and growth metrics
                                            to pair you with the exact investors looking for your profile.
                                        </p>
                                        <ul className="space-y-3 pt-4">
                                            <li className="flex items-center gap-2 text-primary font-body-sm font-semibold">
                                                <MdCheckCircle size={18} /> 92% Alignment Rate
                                            </li>
                                            <li className="flex items-center gap-2 text-primary font-body-sm font-semibold">
                                                <MdCheckCircle size={18} /> Automated Due Diligence
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="relative">
                                        <div className="bg-surface-container-high rounded-2xl p-6 border border-outline-variant space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="w-1/2 h-4 bg-outline-variant/40 rounded-full" />
                                                <div className="w-8 h-8 rounded-full bg-primary/20" />
                                            </div>
                                            <div className="w-full h-24 bg-white rounded-lg border border-outline-variant/20 p-4 space-y-2">
                                                <div className="w-3/4 h-3 bg-outline-variant/20 rounded-full" />
                                                <div className="w-1/2 h-3 bg-outline-variant/20 rounded-full" />
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim" />
                                                <div className="w-10 h-10 rounded-full bg-primary-fixed" />
                                                <div className="w-10 h-10 rounded-full bg-secondary-fixed" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}