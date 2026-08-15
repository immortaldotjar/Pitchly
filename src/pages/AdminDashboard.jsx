import { MdGridView, MdGroup, MdRocketLaunch, MdVerifiedUser, MdBarChart, MdSettings, MdAdd, MdFileDownload } from "react-icons/md"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import StatsRow from "../components/AdminComps/StatsRow"
import GrowthChart from "../components/AdminComps/GrowthChart"
import IndustryDistribution from "../components/AdminComps/IndustryDistribution"
import PendingVerifications from "../components/AdminComps/PendingVerifications"
import RecentActivity from "../components/AdminComps/RecentActivity"
import QuickActions from "../components/AdminComps/QuickActions"

const navItems = [
    { icon: MdGridView, label: "Dashboard", path: "/admin" },
    { icon: MdGroup, label: "Users", path: "/admin/users" },
    { icon: MdRocketLaunch, label: "Startups", path: "/admin/startups" },
    { icon: MdVerifiedUser, label: "Approvals", path: "/admin/approvals" },
    { icon: MdBarChart, label: "Reports", path: "/admin/reports" },
    { icon: MdSettings, label: "Settings", path: "/admin/settings" },
]

const AdminDashboard = () => {
    return (
        <div className="flex bg-background min-h-screen">
            <Sidebar
                brandTitle="Pitchly"
                brandSubtitle="Admin Console"
                navItems={navItems}
                quickAction={{ label: "New Analysis", icon: MdAdd, onClick: () => { } }}
            />

            <div className="flex-1 min-w-0">
                <Topbar
                    placeholder="Search startups, founders, or investors..."
                    user={{ name: "Admin User", role: "Super Admin", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" }}
                />

                <main className="p-6 space-y-6">
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
                </main>
            </div>
        </div>
    )
}

export default AdminDashboard