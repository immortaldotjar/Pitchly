import { motion } from "motion/react";

const stats = [
  { value: "12k+", label: "Founders" },
  { value: "840", label: "Mentors" },
  { value: "2.1k", label: "Investors" },
  { value: "4.5k", label: "Startups" },
  { value: "15k", label: "Meetings" },
  { value: "50k+", label: "Feedback" },
];

const CommunityStats = () => {
  return (
    <section className="py-16 px-margin_mobile md:px-margin_desktop bg-surface-container-low">
      <div className="max-w-max_width mx-auto grid grid-cols-3 md:grid-cols-6 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="text-center"
          >
            <p className="font-numeric-data text-headline-md text-primary">{stat.value}</p>
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CommunityStats