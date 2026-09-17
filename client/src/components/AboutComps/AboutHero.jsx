import { motion } from "motion/react";

const AboutHero = () => {
    return (
        <div className="pt-20 pb-16 px-margin_mobile md:px-margin_desktop">
            <div className="max-w-2xl">
                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-headline-lg text-headline-lg md:text-display md:leading-tight text-on-surface mb-4 mt-20"
                >
                    Helping founders turn ideas into opportunities.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-body-lg text-body-lg text-on-surface-variant"
                >
                    Pitchly was created to simplify how founders present their startups, collaborate
                    with teams, connect with mentors and build meaningful relationships with investors.
                </motion.p>
            </div>
        </div>
    );
};

export default AboutHero;