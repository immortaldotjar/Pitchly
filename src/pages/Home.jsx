
import Hero from "../components/HomeComps/Hero";
import FeaturedStartups from "../components/HomeComps/FeaturedStartups";
import Categories from "../components/HomeComps/Categories";
import HowItWorks from "../components/HomeComps/HowItWorks";
import Stats from "../components/HomeComps/Stats";
import TestimonialSlide, { testimonials } from "../components/HomeComps/Testimonial";
import FAQ from "../components/HomeComps/FAQ";
import Carousel from "../components/Carousel";
export default function Home() {
    return (
        <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary">

            <div className="pt-[72px]">
                <Hero />
                <Categories />
                <FeaturedStartups />
                
                <Stats />

                {/* {testimonials.map((t) => (
                    <TestimonialSlide key={t.name} {...t} />
                ))} */}

                <div className = "max-h-fit relative md:p-margin_desktop p-margin_mobile">
                    <Carousel
                        baseWidth={300}
                        autoplay={true}
                        autoplayDelay={8000}
                        pauseOnHover={false}
                        loop={true}
                        round={false}
                    />
                </div>

                <FAQ />
            </div>
        </div>
    );
}