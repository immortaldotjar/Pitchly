import { MdEdit } from "react-icons/md"
import StatsRow from "../components/UserComps/StatsRow"
import EngagementChart from "../components/UserComps/EngagementChart"
import ProfileChecklist from "../components/UserComps/ProfileChecklist"
import UpcomingMeetings from "../components/UserComps/UpcomingMeetings"
import QuickActions from "../components/UserComps/QuickActions"

const UserDashboard = () => {
    return (
        <>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface">Welcome back, Alex</h1>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Your startup profile has seen a <span className="text-primary font-bold">14% increase</span> in engagement this week.
                    </p>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary font-body-sm text-[13px] font-bold">
                    <MdEdit size={16} /> Edit Startup
                </button>
            </div>

            <StatsRow />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <EngagementChart />
                <ProfileChecklist />
            </div>

            <UpcomingMeetings />
            <QuickActions />
        </>
    )
}

export default UserDashboard