import { MdGroup, MdRocketLaunch, MdInsights, MdBlock } from "react-icons/md"
import StatCard from "../../StatCard"

const UsersStatsRow = ({ users }) => {

    const stats = [
        { icon: MdGroup, label: "Total Users", value: users.length },
        { icon: MdRocketLaunch, label: "Founders", value: users.filter((user) => user.role === "Founder").length },
        { icon: MdInsights, label: "Investors", value: users.filter((user) => user.role === "Investor").length },
        { icon: MdBlock, label: "Suspended", value: users.filter((user) => user.status === "Suspended").length, badge: users.filter((user) => user.status === "Suspended").length > 0 ? "Needs Review" : null, badgeTone: "critical" },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
            ))}
        </div>
    )
}

export default UsersStatsRow