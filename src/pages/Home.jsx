
import Hero from "../components/HomeComps/Hero";
import FeaturedStartups from "../components/HomeComps/FeaturedStartups";
import Categories from "../components/HomeComps/Categories";
import heroBg from "../assets/heroBg.webp"
import Stats from "../components/HomeComps/Stats";
import testimonialBg from "../assets/testimonialBg.png"
import FAQ from "../components/HomeComps/FAQ";
import Carousel from "../components/HomeComps/Carousel";
const Home = () => {
    return (
        <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary">

            <div className="pt-nav_height">
                <div style={{ backgroundImage: `url(${heroBg})` }} className="bg-cover bg-no-repeat bg-bottom">
                    <Hero />
                </div>
                <Categories />
                <FeaturedStartups />

                <Stats />

                {/* {testimonials.map((t) => (
                    <TestimonialSlide key={t.name} {...t} />
                ))} */}

                <div className="max-h-fit relative md:p-margin_desktop p-margin_mobile bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${testimonialBg})` }}>
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

export default Home