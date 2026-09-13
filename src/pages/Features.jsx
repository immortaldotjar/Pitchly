import FeatureHero from "../components/FeatureComps/FeatureHero";
import BentoGrid from "../components/FeatureComps/BentoGrid";
import ProcessSteps from "../components/FeatureComps/ProcessSteps";
import ClaritySection from "../components/FeatureComps/ClaritySection";
import ComparisonTable from "../components/FeatureComps/ComparisonTable";
import FeatureCTA from "../components/FeatureComps/FeatureCTA";

export default function Features() {
    return (
        <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary">
            <div className="pt-nav_height">
                <FeatureHero />
                <BentoGrid />
                <ProcessSteps />
                <ClaritySection />
                <ComparisonTable />
                <FeatureCTA />
            </div>
        </div>
    );
}