import { motion } from "motion/react";
import {
  MdRocketLaunch,
  MdDescription,
  MdChatBubbleOutline,
  MdCalendarMonth,
  MdBarChart,
  MdManageSearch,
  MdSecurity,
} from "react-icons/md";
import FeatureCard from "./FeatureCard";

const smallCards = [
  {
    icon: MdChatBubbleOutline,
    title: "Real-time Messaging",
    description: "Encrypted direct lines between founders and verified mentors.",
  },
  {
    icon: MdCalendarMonth,
    title: "Meeting Scheduling",
    description: "Integrated calendar for seamless networking and demo calls.",
  },
  {
    icon: MdBarChart,
    title: "Startup Analytics",
    description: "Track profile views and document engagement metrics.",
  },
];

export default function BentoGrid() {
  return (
    <section className="px-margin_mobile md:px-margin_desktop pb-section_gap">
      <div className="max-w-max_width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="bg-surface border border-outline-variant rounded-lg p-6 flex flex-col gap-6"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary center">
            <MdRocketLaunch size={20} />
          </div>

          <div className="space-y-1">
            <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Startup Profiles</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Comprehensive data rooms that showcase your business model, traction, and team
              in a structured, professional format.
            </p>
          </div>

          <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-outline-variant/40" />
              <div className="flex-1 h-2 rounded-full bg-outline-variant/40" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 rounded-lg border border-outline-variant/40" />
              <div className="h-8 rounded-lg border border-outline-variant/40" />
              <div className="h-8 rounded-lg border border-outline-variant/40" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-surface border border-outline-variant rounded-lg p-6 flex flex-col gap-6"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary center">
            <MdDescription size={20} />
          </div>

          <div className="space-y-1">
            <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Pitch Deck Analysis</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Securely upload and share your deck with version control and specific
              access permissions for potential investors.
            </p>
          </div>

          <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary center shrink-0">
              <MdDescription size={18} />
            </div>
            <div className="flex-1 space-y-2">
              <p className="font-body-sm text-body-sm text-on-surface">pitch_deck_v2.pdf</p>
              <div className="h-1.5 w-full rounded-full bg-outline-variant/30 overflow-hidden">
                <div className="h-full w-2/3 bg-primary rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {smallCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <FeatureCard {...card} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1 bg-surface border border-outline-variant rounded-lg p-6 flex flex-col gap-6"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary center">
            <MdManageSearch size={20} />
          </div>

          <div className="space-y-1">
            <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Investor Discovery</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Filter through a curated database of VCs, Angel Investors, and Syndicate
              leaders based on sector and stage.
            </p>
          </div>

          <div className="space-y-3">
            {[70, 45, 90].map((width, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-9 h-5 rounded-full bg-outline-variant/30 relative shrink-0">
                  <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow" />
                </div>
                <div className="flex-1 h-2 rounded-full bg-outline-variant/30 overflow-hidden">
                  <div className="h-full bg-primary/60 rounded-full" style={{ width: `${width}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FeatureCard
            icon={MdSecurity}
            title="Enterprise Security"
            description="SBAC, 2FA, and SOC-2 compliant infrastructure for your sensitive startup data."
            dark
            className="h-full justify-center"
          />
        </motion.div>
      </div>
    </section>
  );
}