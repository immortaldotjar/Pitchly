import { motion } from "motion/react";

const variants = {
  primary: "bg-primary text-on-primary hover:opacity-90",
  secondary:
    "border border-outline-variant bg-surface text-on-surface hover:bg-surface-container",
  ghost: "text-primary hover:bg-surface-container",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 rounded-lg font-body-sm text-body-sm font-semibold transition-colors duration-150 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}