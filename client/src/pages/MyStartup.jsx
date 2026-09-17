import { mockStartup, mockStartup as startup } from "../config/data"
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

import { getMyStartupReq } from "../api/startupApi"
import { useEffect, useState } from "react"


const MyStartup = () => {

    const [startup, setStartup] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        getMyStartupReq().then(({ startup }) => setStartup(startup))
            .catch((err) => setError(err.response?.data?.message ?? "Failed to Load Startup."))
            .finally(() => { setLoading(false) })
    }, [])

    if (loading) {
        return <p className="font-body-sm text-body-sm text-on-surface-variant">Loading your startup...</p>
    }
    if (error) {
        return <p className="font-body-sm text-body-sm text-error">{error}</p>
    }

    const display = {
        ...mockStartup,
        name: startup.startupName,
        tagline: startup.industry,
        stage: startup.stage,
        employees: startup.teamSize,
    }


    return (
        <>
            <StartupBanner
                name={display.name}
                logo={display.logo}
                tagline={display.tagline}
                stage={display.stage}
                location={display.location}
                fundingGoal={display.fundingGoal}
                employees={display.employees}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2 space-y-8">
                    <ExecutiveOverview
                        overview={display.overview}
                        problem={display.problem}
                        solution={display.solution}
                    />

                    <PitchDeckCard {...display.pitchDeck} />

                    <CoreLeadership leadership={display.leadership} />

                    <ProductCulture gallery={display.gallery} />

                    <RoadmapMilestones roadmap={display.roadmap} />

                    <ConnectRow />
                </div>

                <div className="space-y-6">
                    <ManagementPanel />
                    <InvestorInterestPanel {...display.metrics} />
                    <MentorFeedbackPanel
                        feedback={display.feedback}
                        totalComments={display.totalComments}
                        visibility={display.visibility}
                    />
                </div>
            </div>
        </>
    )
}

export default MyStartup