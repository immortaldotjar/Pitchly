import { useState, useEffect } from "react"
import { getMyMeetingsReq } from "../../api/meetingApi"

import { SiGooglemeet,SiZoom } from "react-icons/si"

const UpcomingMeetings = ({ refreshKey }) => {

    const [meetings, setMeetings] = useState([])
    const [loading, setLoading] = useState(true)

    const platformIcon = {
        "Google Meet": { icon: SiGooglemeet, tone: "bg-primary/10 text-primary" },
        "Zoom": { icon: SiZoom, tone: "bg-primary/10 text-primary" },
    }

    useEffect(() => {
        getMyMeetingsReq()
            .then(({ meetings }) => setMeetings(meetings))
            .finally(() => setLoading(false))
    }, [refreshKey])

    return (
        <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 pb-4">
                <div>
                    <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Upcoming Meetings</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Your saved Google Meet and Zoom links.</p>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-surface-container-low text-left">
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Meeting</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">With</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Date</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3 text-right">Join</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center font-body-sm text-body-sm text-on-surface-variant">Loading...</td>
                            </tr>
                        ) : meetings.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center font-body-sm text-body-sm text-on-surface-variant">No upcoming meetings saved yet.</td>
                            </tr>
                        ) : (
                            meetings.map((meeting) => {
                                const config = platformIcon[meeting.platform] ?? platformIcon["Google Meet"]
                                return (
                                    <tr key={meeting._id} className="border-t border-outline-variant/30">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <span className={`w-8 h-8 rounded-lg center shrink-0 ${config.tone}`}>
                                                    <config.icon size={16} />
                                                </span>
                                                <p className="font-body-sm text-body-sm font-bold text-on-surface">{meeting.title}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant">{meeting.withWhom || "—"}</td>
                                        <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface">
                                            {new Date(meeting.date).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}
                                        </td>
                                        <td className="px-6 py-4 text-right">

                                            <a href={meeting.joinLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block px-4 py-1.5 rounded-lg bg-primary text-on-primary font-body-sm text-[11px] font-bold">
                                                Join
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default UpcomingMeetings