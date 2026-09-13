import { mockStartup as startup } from "../config/data"
import StartupBanner from "../components/UserComps/Startup/StartupBanner"
import ExecutiveOverview from "../components/UserComps/Startup/ExecutiveOverview"
import PitchDeckCard from "../components/UserComps/Startup/PitchDeckCard"
import CoreLeadership from "../components/UserComps/Startup/CoreLeadership"
import ProductCulture from "../components/UserComps/Startup/ProductCulture"
import RoadmapMilestones from "../components/UserComps/Startup/RoadmapMilestones"
import ConnectRow from "../components/UserComps/Startup/ConnectRow"
import ManagementPanel from "../components/UserComps/Startup/ManagementPanel"
import InvestorInterestPanel from "../components/UserComps/Startup/InvestorInterestPanel"
import MentorFeedbackPanel from "../components/UserComps/Startup/MentorFeedbackPanel"

const MyStartup = () => {
    return (
        <>
            <StartupBanner
                name={startup.name}
                logo={startup.logo}
                tagline={startup.tagline}
                stage={startup.stage}
                location={startup.location}
                fundingGoal={startup.fundingGoal}
                employees={startup.employees}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2 space-y-8">
                    <ExecutiveOverview
                        overview={startup.overview}
                        problem={startup.problem}
                        solution={startup.solution}
                    />

                    <PitchDeckCard {...startup.pitchDeck} />

                    <CoreLeadership leadership={startup.leadership} />

                    <ProductCulture gallery={startup.gallery} />

                    <RoadmapMilestones roadmap={startup.roadmap} />

                    <ConnectRow />
                </div>

                <div className="space-y-6">
                    <ManagementPanel />
                    <InvestorInterestPanel {...startup.metrics} />
                    <MentorFeedbackPanel
                        feedback={startup.feedback}
                        totalComments={startup.totalComments}
                        visibility={startup.visibility}
                    />
                </div>
            </div>
        </>
    )
}

export default MyStartup