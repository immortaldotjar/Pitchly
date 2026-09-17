import { useState, useEffect } from "react"
import { getMyMeetingsReq } from "../../api/meetingApi"

const UpcomingMeetings = () => {

    const [meetings, setMeetings] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getMyMeetingsReq()
            .then(({ meetings }) => setMeetings(meetings))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 pb-4">
                <div>
                    <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Upcoming Meetings</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Your scheduled sessions this week.</p>
                </div>
                <button className="font-body-sm text-body-sm text-primary font-semibold">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-surface-container-low text-left">
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Meeting</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">With</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Date</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center font-body-sm text-body-sm text-on-surface-variant">Loading...</td>
                            </tr>
                        ) : meetings.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center font-body-sm text-body-sm text-on-surface-variant">No upcoming meetings scheduled yet.</td>
                            </tr>
                        ) : (
                            meetings.map((meeting) => (
                                <tr key={meeting._id} className="border-t border-outline-variant/30">
                                    <td className="px-6 py-4 font-body-sm text-body-sm font-bold text-on-surface">{meeting.title}</td>
                                    <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant">{meeting.withWhom}</td>
                                    <td className="px-6 py-4">
                                        <p className="font-body-sm text-body-sm text-on-surface">{new Date(meeting.date).toLocaleDateString()}</p>
                                        <p className="font-body-sm text-[11px] text-on-surface-variant">{meeting.location}</p>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="px-4 py-1.5 rounded-lg bg-primary text-on-primary font-body-sm text-[11px] font-bold">
                                            Join
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UpcomingMeetings