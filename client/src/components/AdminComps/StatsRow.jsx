import { MdGroup, MdRocketLaunch, MdVerifiedUser, MdFlag } from "react-icons/md"
import StatCard from "../StatCard"
import { useEffect, useState } from "react"
import { getAdminStatusReq } from "../../api/statsApi"



const StatsRow = () => {

    const [stats, setStats] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAdminStatusReq()
            .then((data) => setStats(data))
            .finally(() => setLoading(false))
    })

    if (loading || !stats) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-surface border border-outline-variant rounded-2xl p-5 h-28 animate-pulse" />
                ))}
            </div>
        )
    }

    const cards = [
        { icon: MdGroup, label: "Total Users", value: stats.totalUsers },
        { icon: MdRocketLaunch, label: "Active Startups", value: stats.activeStartups },
        { icon: MdVerifiedUser, label: "Pending Approvals", value: stats.pendingApprovals, badge: stats.pendingApprovals > 0 ? "Critical" : null, badgeTone: "critical" },
        { icon: MdFlag, label: "Suspended Startups", value: stats.suspendedStartups, badge: stats.suspendedStartups > 0 ? "Action Required" : null, badgeTone: "action" },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map((stat) => (
                <StatCard key={stat.label} {...stat} />
            ))}
        </div>
    )
}

export default StatsRow