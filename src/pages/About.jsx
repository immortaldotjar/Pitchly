import AboutHero from "../components/AboutComps/AboutHero";
import OurMission from "../components/AboutComps/OurMission";
import PillarsGrid from "../components/AboutComps/PillarsGrid";
import JourneyTimeline from "../components/AboutComps/JourneyTimeline";
import CoreValues from "../components/AboutComps/CoreValues";
import AboutCTA from "../components/AboutComps/AboutCTA";

const About = () => {
    return (
        <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary">
            <AboutHero />
            <OurMission />
            <PillarsGrid />
            <JourneyTimeline />
            <CoreValues />
            <AboutCTA />
        </div>
    );
};

export default About;