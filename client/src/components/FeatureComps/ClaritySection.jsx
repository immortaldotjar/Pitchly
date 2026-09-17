import { motion } from "motion/react";
import { MdCheckCircle } from "react-icons/md";

const checklist = [
  "High-density dashboard views",
  "One-click investor introductions",
  "Context-aware messaging",
];

function BrowserMockup({ className = "" }) {
  return (
    <div className={`rounded-2xl border border-outline-variant overflow-hidden bg-surface shadow-editorial ${className}`}>
      <div className="flex items-center gap-1.5 px-4 py-3 bg-surface-container-low border-b border-outline-variant/30">
        <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
        <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
        <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
      </div>
      <div
        className="h-48 md:h-56 center bg-gradient-to-br from-tertiary-fixed via-primary-fixed to-secondary-fixed"
      >
        <span className="font-body-sm text-body-sm text-on-surface/70 bg-white/50 backdrop-blur px-3 py-1 rounded-full">
          Pitchly | Features Overview
        </span>
      </div>
    </div>
  );
}

export default function ClaritySection() {
  return (
    <section className="py-section_gap px-margin_mobile md:px-margin_desktop overflow-hidden">
      <div className="max-w-max_width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
            Designed for clarity.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We spent thousands of hours refining our UI to ensure that data density never
            compromises usability. Every connection is purposeful.
          </p>

          <ul className="space-y-3 pt-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3 font-body-sm text-body-sm text-on-surface">
                <MdCheckCircle className="text-primary shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="order-1 lg:order-2 flex flex-col gap-6"
        >
          <BrowserMockup />
          <BrowserMockup className="hidden md:block lg:ml-10" />
        </motion.div>
      </div>
    </section>
  );
}