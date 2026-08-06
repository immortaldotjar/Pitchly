import AboutHero from "../components/AboutComps/AboutHero";
import OurMission from "../components/AboutComps/OurMission";
import PillarsGrid from "../components/AboutComps/PillarsGrid";
import JourneyTimeline from "../components/AboutComps/JourneyTimeline";
import CoreValues from "../components/AboutComps/CoreValues";
import AboutFAQ from "../components/AboutComps/AboutFAQ";
import AboutCTA from "../components/AboutComps/AboutCTA";

const About = () => {
    return (
        <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary">
            <AboutHero />
            <OurMission />
            <PillarsGrid />
            <JourneyTimeline />
            <CoreValues />
            <AboutFAQ />
            <AboutCTA />
        </div>
    );
};

export default About;