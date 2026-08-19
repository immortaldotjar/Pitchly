import { Outlet } from "react-router"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

const DashboardLayout = ({ sidebarProps, topbarProps }) => {
    return (
        <div className="flex bg-background min-h-screen">
            <Sidebar {...sidebarProps} />
            <div className="flex-1 min-w-0">
                <Topbar {...topbarProps} />
                <main className="p-6 space-y-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout