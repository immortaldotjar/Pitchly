import { motion } from "motion/react";
import Button from "../Button";
const CommunityCTA = () => {
  return (
    <section className="pb-section_gap px-margin_mobile md:px-margin_desktop">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="max-w-max_width mx-auto bg-surface-container-high rounded-[32px] py-20 px-6 text-center flex flex-col items-center gap-8"
      >
        <h2 className="font-headline-lg text-headline-lg md:text-display md:leading-tight text-on-surface max-w-2xl">
          Build your startup alongside people who want to see it succeed.
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" className="px-8 py-3 rounded-[14px]">
            Create Startup
          </Button>
          <Button variant="secondary" className="px-8 py-3 rounded-[14px]">
            Browse Community
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default CommunityCTA