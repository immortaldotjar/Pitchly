import { motion } from "motion/react";

const steps = [
  { number: "01", title: "Create", description: "Configure your startup workspace and upload core documentation." },
  { number: "02", title: "Connect", description: "Discover and engage with verified mentors and capital partners." },
  { number: "03", title: "Grow", description: "Manage your board, track metrics, and close your next funding round." },
];

export default function ProcessSteps() {
  return (
    <section className="py-section_gap px-margin_mobile md:px-margin_desktop bg-surface-container-low">
      <div className="max-w-max_width mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">
          Building momentum is structural
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto mb-16">
          Follow our three-step framework to transition from stealth mode to market leader.
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {/* connecting line, desktop only */}
          <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-px bg-outline-variant" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center gap-4"
            >
              <span className="w-12 h-12 rounded-full bg-surface border border-outline-variant center font-numeric-data text-body-md font-bold text-primary z-10">
                {step.number}
              </span>
              <h4 className="font-headline-md text-body-lg font-bold text-on-surface">{step.title}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[220px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}