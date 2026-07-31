import { motion } from "motion/react";
import Button from "../Button";

export default function FeatureCTA() {
  return (
    <section className="relative pt-section_gap pb-24 px-margin_mobile md:px-margin_desktop overflow-hidden bg-primary">
      {/* diagonal wave separator */}
      <svg
        className="absolute top-0 left-0 w-full text-background"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: "80px" }}
      >
        <path d="M0,0 L1440,0 L1440,40 C1200,90 240,90 0,20 Z" fill="currentColor" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6"
      >
        <h2 className="font-headline-lg text-headline-lg text-on-primary">
          Ready to scale your startup?
        </h2>
        <p className="font-body-md text-body-md text-on-primary/70">
          Join 2,000+ founders and investors already connecting on the world's most
          professional startup network.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 pt-2">
          <Button variant="secondary" className="px-8 py-3 rounded-[14px] bg-on-primary text-primary border-transparent">
            Get Started Now
          </Button>
          <button className="font-body-sm text-body-sm text-on-primary font-semibold hover:underline">
            Talk to our team
          </button>
        </div>
      </motion.div>
    </section>
  );
}