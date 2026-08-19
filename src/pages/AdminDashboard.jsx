import { MdFileDownload } from "react-icons/md"
import StatsRow from "../components/AdminComps/StatsRow"
import GrowthChart from "../components/AdminComps/GrowthChart"
import IndustryDistribution from "../components/AdminComps/IndustryDistribution"
import PendingVerifications from "../components/AdminComps/PendingVerifications"
import RecentActivity from "../components/AdminComps/RecentActivity"
import QuickActions from "../components/AdminComps/QuickActions"

const AdminDashboard = () => {
    return (
        <>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface">Admin Overview</h1>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Monitor platform health and manage verification workflows.</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center bg-surface-container-low border border-outline-variant rounded-lg p-1">
                        <button className="px-3 py-1.5 rounded-md bg-surface font-body-sm text-[12px] font-bold text-on-surface shadow-sm">Last 30 Days</button>
                        <button className="px-3 py-1.5 rounded-md font-body-sm text-[12px] font-semibold text-on-surface-variant">90 Days</button>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary font-body-sm text-[13px] font-bold">
                        <MdFileDownload size={16} /> Export Report
                    </button>
                </div>
            </div>

            <StatsRow />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <GrowthChart />
                <IndustryDistribution />
            </div>

            <PendingVerifications />
            <RecentActivity />
            <QuickActions />
        </>
    )
}

export default AdminDashboard