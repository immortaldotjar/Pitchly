import { MdRocketLaunch, MdVerifiedUser, MdCheckCircleOutline, MdBlock } from "react-icons/md"
import StatCard from "../../StatCard"

const StartupsStatsRow = ({ startups }) => {

    const stats = [
        { icon: MdRocketLaunch, label: "Total Startups", value: startups.length },
        { icon: MdCheckCircleOutline, label: "Active", value: startups.filter((startup) => startup.status === "Active").length },
        { icon: MdVerifiedUser, label: "Pending Review", value: startups.filter((startup) => startup.status === "Pending Review").length, badge: startups.filter((startup) => startup.status === "Pending Review").length > 0 ? "Needs Action" : null, badgeTone: "action" },
        { icon: MdBlock, label: "Suspended", value: startups.filter((startup) => startup.status === "Suspended").length, badge: startups.filter((startup) => startup.status === "Suspended").length > 0 ? "Critical" : null, badgeTone: "critical" },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
            ))}
        </div>
    )
}

export default StartupsStatsRow