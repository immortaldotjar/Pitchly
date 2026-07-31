import { motion } from "motion/react";
import { MdMic, MdGroups, MdCode } from "react-icons/md";
import Button from "../Button";

const events = [
  {
    icon: MdMic,
    date: "MAY 24, 2024",
    title: "Founders Pitch Night: AI & ML",
    meta: "Virtual Session • 10 Slots Available",
    cta: "RSVP",
  },
  {
    icon: MdGroups,
    date: "JUNE 02, 2024",
    title: "Open Mentorship Hours",
    meta: "Global Community • Open Drop-in",
    cta: "Join Room",
  },
  {
    icon: MdCode,
    date: "JUNE 15, 2024",
    title: "Summer Hackathon: Sustainability",
    meta: "London Hybrid • Team Registration Open",
    cta: "Apply",
  },
];

const CommunityCalendar = () => {
  return (
    <section className="py-section_gap px-margin_mobile md:px-margin_desktop">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
            Calendar
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            Upcoming Community Gatherings
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-5 bottom-5 w-px bg-outline-variant" />

          <div className="space-y-10">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex items-center gap-6 pl-0"
              >
                <span className="relative z-10 w-10 h-10 rounded-full bg-surface border border-outline-variant center text-primary shrink-0">
                  <event.icon size={18} />
                </span>

                <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="font-label-caps text-label-caps text-primary uppercase tracking-wide">
                      {event.date}
                    </p>
                    <h4 className="font-body-lg text-body-lg font-bold text-on-surface">{event.title}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{event.meta}</p>
                  </div>

                  <Button variant="secondary" className="px-5 py-2 rounded-[10px] shrink-0 w-fit">
                    {event.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunityCalendar