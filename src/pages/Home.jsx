
import Hero from "../components/HomeComps/Hero";
import FeaturedStartups from "../components/HomeComps/FeaturedStartups";
import Categories from "../components/HomeComps/Categories";
import HowItWorks from "../components/HomeComps/HowItWorks";
import Stats from "../components/HomeComps/Stats";
import TestimonialSlide, { testimonials } from "../components/HomeComps/Testimonial";
import FAQ from "../components/HomeComps/FAQ";

export default function Home() {
    return (
        <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary">
            
            <div className="pt-[72px]">
                <Hero />
                <FeaturedStartups />
                <Categories />
                <HowItWorks />
                <Stats />

                {/* swap this map for your carousel component when you wire it in */}
                {testimonials.map((t) => (
                    <TestimonialSlide key={t.name} {...t} />
                ))}

                <FAQ />
            </div>
        </div>
    );
}