import { MdFormatQuote } from "react-icons/md";

export const testimonials = [
    {
        name: "Marcus Chen",
        role: "Founder of Orbit Systems",
        quote:
            "Pitchly didn't just help us find money; it helped us find the right partners. The caliber of the network is unmatched in the startup ecosystem.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    }
];

export default function TestimonialSlide({ name, role, quote, image }) {
    return (
        <section className="py-section_gap px-margin_mobile md:px-margin_desktop bg-surface-container-highest">
            <div className="max-w-max_width mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-square lg:aspect-video overflow-hidden rounded-[40px]">
                        <img src={image} alt={name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <p className="font-headline-md text-headline-md mb-2">{name}</p>
                            <p className="font-body-sm opacity-80">{role}</p>
                        </div>
                    </div>

                    <div className="lg:pl-12 space-y-8">
                        <MdFormatQuote className="text-6xl text-primary/40" />
                        <p className="font-display text-headline-lg leading-snug italic text-on-surface">
                            "{quote}"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}