import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MdExpandMore } from "react-icons/md";

const faqs = [
    {
        q: "How does Pitchly verify founders?",
        a: "We use a multi-stage verification process including LinkedIn integration, business registration checks, and a brief intake interview to ensure the quality of our network.",
    },
    {
        q: "What investors are currently active on the platform?",
        a: "Our network includes top-tier venture capital firms, angel syndicates, and corporate venture arms focused on Seed to Series B rounds.",
    },
    {
        q: "Is my pitch deck data secure?",
        a: "Pitchly uses bank-grade encryption and granular permission controls. You decide exactly who sees your materials and for how long.",
    },
    {
        q: "How do I start a pitch on Pitchly?",
        a: "Create your startup profile, upload your pitch deck, and set your visibility preferences. Verified investors and mentors can then discover and reach out to you directly.",
    },
    {
        q: "Is my startup data safe?",
        a: "Yes. Pitchly uses enterprise-grade encryption and granular access controls, so you decide exactly who can view your materials and for how long.",
    },
    {
        q: "Who are the mentors on the platform?",
        a: "Our mentors are vetted industry operators, former founders, and domain experts who volunteer their time to guide early and growth-stage startups.",
    },
];

const AccordionItem = ({ q, a, isOpen, onClick }) => {
    return (
        <div className="bg-surface-container-low rounded-lg border border-outline-variant/30">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-4 px-6 font-body-md font-semibold text-on-surface text-left"
            >
                {q}
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <MdExpandMore size={22} />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-4 text-sm font-body-md text-on-surface-variant">{a}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const FAQ = () => {
    const [open, setOpen] = useState(null);

    return (
        <section className="py-section_gap px-margin_mobile md:px-margin_desktop bg-surface-container-lowest">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-headline-lg text-headline-lg text-center mb-16">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={faq.q}
                            q={faq.q}
                            a={faq.a}
                            isOpen={open === i}
                            onClick={() => setOpen(open === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ