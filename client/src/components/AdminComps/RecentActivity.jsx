import { useState, useEffect } from "react"
import { MdMoreVert } from "react-icons/md"
import { getRecentActivityReq } from "../../api/activityApi"

const RecentActivity = () => {

    const [activities, setActivities] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getRecentActivityReq()
            .then(({ activities }) => setActivities(activities))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 pb-4">
                <div>
                    <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Recent Activity</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Live platform events.</p>
                </div>
                <button className="w-9 h-9 rounded-lg border border-outline-variant center text-on-surface-variant">
                    <MdMoreVert size={18} />
                </button>
            </div>

            <div className="divide-y divide-outline-variant/30">
                {loading ? (
                    <p className="px-6 py-8 text-center font-body-sm text-body-sm text-on-surface-variant">Loading...</p>
                ) : activities.length === 0 ? (
                    <p className="px-6 py-8 text-center font-body-sm text-body-sm text-on-surface-variant">No activity yet.</p>
                ) : (
                    activities.map((activity) => (
                        <div key={activity._id} className="px-6 py-4">
                            <p className="font-body-sm text-body-sm text-on-surface">{activity.message}</p>
                            <p className="font-body-sm text-[11px] text-on-surface-variant mt-1">
                                {new Date(activity.createdAt).toLocaleString()}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default RecentActivity