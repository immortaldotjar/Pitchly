import { motion } from "motion/react";
import Button from "../Button";

const AboutCTA = () => {
    return (
        <section className="pb-section_gap px-margin_mobile md:px-margin_desktop">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="max-w-max_width mx-auto bg-primary rounded-[32px] py-16 px-6 text-center flex flex-col items-center gap-6"
            >
                <h2 className="font-headline-lg text-headline-lg text-on-primary">
                    Start building your startup today.
                </h2>
                <p className="font-body-md text-body-md text-on-primary/70 max-w-md">
                    Join thousands of founders who are already using Pitchly to accelerate their
                    journey from idea to market leader.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="secondary" className="px-8 py-3 rounded-[14px] bg-on-primary text-primary border-transparent">
                        Create Startup
                    </Button>
                    <Button variant="secondary" className="px-8 py-3 rounded-[14px] bg-transparent text-on-primary border-on-primary/30">
                        Explore Startups
                    </Button>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutCTA;