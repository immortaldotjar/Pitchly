import { motion } from "motion/react";
import { MdArrowForward } from "react-icons/md";
import StartupCard from "./StartupCard";

const startups = [
    {
        name: "NeuralFlow",
        tags: ["AI", "MEDTECH"],
        description: "Real-time brain activity mapping for surgical precision.",
        funding: "$2.5M Seed",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
        avatars: [
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
        ],
    },
    {
        name: "Verdant Grid",
        tags: ["GREENTECH"],
        description: "Next-gen power management for decentralized energy clusters.",
        funding: "$12M Series A",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80",
        avatars: ["https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80"],
    },
    {
        name: "QuantaLedger",
        tags: ["FINTECH", "DEEPTECH"],
        description: "Quantum-resistant encryption for global financial settlements.",
        funding: "Bootstrap",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80",
        avatars: [
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
        ],
    },
];

export default function FeaturedStartups() {
    return (
        <section className="py-section_gap px-margin_mobile md:px-margin_desktop bg-surface-container-lowest">
            <div className="max-w-max_width mx-auto">
                <div className="flex justify-between items-end mb-10">
                    <div className="space-y-4">
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
                            Featured Profiles
                        </span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface">Trending in the Network</h2>
                    </div>
                    <button className="flex items-center gap-2 font-body-sm text-body-sm text-primary font-semibold">
                        View All <MdArrowForward size={18} />
                    </button>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {startups.map((startup) => (
                        <motion.div
                            key={startup.name}
                            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        >
                            <StartupCard {...startup} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}