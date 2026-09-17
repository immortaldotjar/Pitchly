import { motion } from "motion/react";
import { MdRocketLaunch } from "react-icons/md";
import Button from "./Button";
import chartImg from "../../assets/chart.png"
import { useNavigate } from "react-router";
import heroBg from "../../assets/heroBg.webp"


const heroStats = [
    { label: "FUNDING", value: "$4.2M" },
    { label: "SCORE", value: "94/100" },
    { label: "REACH", value: "12k+" },
];



export default function Hero() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen center px-margin_mobile md:px-margin_desktop max-w-max_width mx-auto pb-8 md:pb-0">
            <div className="grid grid-cols-12 gap-gutter items-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="col-span-12 lg:col-span-6 space-y-8"
                >
                    <h1 className="font-display text-display mt-4 md:mt-0 text-on-surface">
                        From Idea to Impact.
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                        A curated network for founders to showcase, refine, and connect with the people who matter most.
                    </p>
                    <div className="flex gap-5 w-full md:pr-20">
                        <Button variant="primary" className="px-8 py-2 w-full not-md:text-xs" onClick={() => { navigate("/auth/signup") }}>Create Account</Button>
                        <Button variant="secondary" className="px-8 py-2 w-full not-md:text-xs" onClick={() => { navigate("/auth/signin") }}>Sign In</Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="col-span-12 lg:col-span-6 mt-12 lg:mt-0 relative"
                >
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-md scale-100 group rotate-1 hover:rotate-y-30 hover:skew-x-12 transition duration-500 hover:shadow-[-1px_1px_0px_0px_rgba(0,0,0,0.6)] ">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 center text-primary">
                                    <MdRocketLaunch size={20} />
                                </div>
                                <div>
                                    <h4 className="font-headline-md text-body-md font-bold">Lumina Bio</h4>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">Series A - Biotech</p>
                                </div>
                            </div>

                            <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-label-caps text-label-caps group-hover:translate-x-1 transition duration-200 group-hover:shadow-[-1px_1px_0px_0px_rgba(0,0,0,0.6)]">
                                Hiring
                            </span>

                        </div>

                        <div className="space-y-6">
                            <div className={`h-0.5 bg-primary-fixed-dim relative `}>
                                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface" />
                                <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface" />
                                <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-4 h-4 bg-outline-variant rounded-full border-4 border-surface" />
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-outline-variant rounded-full border-4 border-surface" />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {heroStats.map((stat) => (


                                    <div key={stat.label} className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20 backdrop-blur-2xl group-hover:translate-x-1 transition duration-300 group-hover:shadow-[-1px_1px_0px_0px_rgba(0,0,0,0.6)]">
                                        <p className="font-label-caps text-label-caps text-on-surface-variant group-hover:translate-x-2 transition group-hover:drop-shadow-[-1px_1px_0px_rgba(0,0,0,.2)]">{stat.label}</p>
                                        <p className={`font-bold  font-numeric-data md:text-headline-md text-primary group-hover:translate-x-2 transition group-hover:drop-shadow-[-1px_1px_0px_rgba(0,0,0,.2)]`}>{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="w-full h-full bg-contain bg-center rounded-xl  ">
                                <img src={chartImg} alt="Chart_Image" className={`w-full h-full 
                                    transition duration-400
                                    group-hover:translate-x-1
                                    filter 
                                    group-hover:filter-[drop-shadow(-1px_1px_0_rgba(0,0,0,0.6))]`}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}