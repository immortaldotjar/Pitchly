import { MdGroup, MdRocketLaunch, MdVerifiedUser, MdFlag } from "react-icons/md"
import StatCard from "../StatCard"

const stats = [
    { icon: MdGroup, label: "Total Users", value: "12,480", trend: "+12% MoM" },
    { icon: MdRocketLaunch, label: "Active Startups", value: "1,240", trend: "+5% MoM" },
    { icon: MdVerifiedUser, label: "Pending Approvals", value: "42", badge: "Critical", badgeTone: "critical" },
    { icon: MdFlag, label: "Reports Flagged", value: "8", badge: "Action Required", badgeTone: "action" },
]

const StatsRow = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
            ))}
        </div>
    )
}

export default StatsRow