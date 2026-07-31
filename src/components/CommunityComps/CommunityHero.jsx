import { motion } from "motion/react";
import { MdRocketLaunch, MdSchool, MdInsights } from "react-icons/md";
import Button from "../Button";

const roles = [
  {
    icon: MdRocketLaunch,
    title: "Founders",
    description:
      "The core of our ecosystem. Access resources, build your network, and showcase your vision to the right people at the right time.",
  },
  {
    icon: MdSchool,
    title: "Mentors",
    description:
      "Pay it forward by guiding the next generation of industry disruptors. Share insights and expand your professional legacy.",
  },
  {
    icon: MdInsights,
    title: "Investors",
    description:
      "Discover vetted high-growth opportunities. Our platform provides the data density needed for confident deal flow.",
  },
];
const CommunityHero = () => {
  return (
    <section className="pt-20 pb-16 px-margin_mobile md:px-margin_desktop">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 mb-16">

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-headline-lg text-headline-lg md:text-display md:leading-tight text-on-surface"
        >
          A network built for people who build companies.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
        >
          Pitchly bridges the gap between ambitious founders, seasoned mentors, and
          forward-thinking investors through data-driven networking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 pt-2"
        >
          <Button variant="primary" className="px-8 py-3 rounded-[14px]">
            Join Pitchly
          </Button>
          <Button variant="secondary" className="px-8 py-3 rounded-[14px]">
            Discover Startups
          </Button>
        </motion.div>
      </div>

      <div className="max-w-max_width mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((role, i) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-surface border border-outline-variant rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary center">
              <role.icon size={20} />
            </div>
            <div className="space-y-2">
              <h4 className="font-headline-md text-body-lg font-bold text-on-surface">{role.title}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{role.description}</p>
            </div>
            <div className="w-6 h-0.5 bg-primary" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CommunityHero