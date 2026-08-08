import { motion } from "motion/react";

export default function FeatureCard({ icon: Icon, title, description, dark = false, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`rounded-lg p-6 border flex flex-col gap-3 ${
        dark
          ? "bg-primary text-on-primary border-transparent"
          : "bg-surface border-outline-variant"
      } ${className}`}
    >
      <div
        className={`w-10 h-10 rounded-xl center ${
          dark ? "bg-white/15 text-on-primary" : "bg-primary/10 text-primary"
        }`}
      >
        <Icon size={20} />
      </div>

      <div className="space-y-1">
        <h4 className={`font-headline-md text-body-lg font-bold ${dark ? "text-on-primary" : "text-on-surface"}`}>
          {title}
        </h4>
        <p className={`font-body-sm text-body-sm ${dark ? "text-on-primary/70" : "text-on-surface-variant"}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}