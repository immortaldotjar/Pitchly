import { motion } from "motion/react";

const rows = [
  {
    focus: "Networking",
    without: "Random LinkedIn outreach",
    with: "Structured, verified intros",
  },
  {
    focus: "Pitch Decks",
    without: "Static PDFs in email threads",
    with: "Interactive, trackable data rooms",
  },
  {
    focus: "Investor Tracking",
    without: "Fragmented spreadsheets",
    with: "Native CRM & pipeline management",
  },
  {
    focus: "Messaging",
    without: "Lost in inbox clutter",
    with: "Dedicated professional thread",
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-section_gap px-margin_mobile md:px-margin_desktop">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">Why Pitchly?</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-12">
          The difference between a pitch and a partnership is the platform.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-left border border-outline-variant rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-surface-container-low font-label-caps text-label-caps text-on-surface-variant uppercase">
            <div className="p-4">Feature Focus</div>
            <div className="p-4">Without Pitchly</div>
            <div className="p-4">With Pitchly</div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.focus}
              className={`grid grid-cols-3 ${i !== rows.length - 1 ? "border-b border-outline-variant/30" : ""}`}
            >
              <div className="p-4 font-body-md text-body-md font-semibold text-on-surface">{row.focus}</div>
              <div className="p-4 font-body-sm text-body-sm text-on-surface-variant italic">{row.without}</div>
              <div className="p-4 font-body-sm text-body-sm text-primary font-semibold">{row.with}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}