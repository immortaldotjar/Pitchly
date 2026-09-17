import { useState, useEffect } from "react"
import { getAllStartupReq, updateStartupStatusReq } from "../../api/startupApi"

const PendingVerifications = () => {

    const [startups, setStartups] = useState([])
    const [loading, setLoading] = useState(true)

    const loadPending = () => {
        setLoading(true)
        getAllStartupReq({ status: "pending", limit: 3 })
            .then(({ startups }) => setStartups(startups))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        loadPending()
    }, [])

    const handleDecision = async (id, status) => {
        await updateStartupStatusReq(id, status)
        setStartups((prev) => prev.filter((startup) => startup._id !== id))
    }

    return (
        <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 pb-4">
                <div>
                    <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Pending Startup Verifications</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Startups awaiting due diligence approval.</p>
                </div>
                <button className="font-body-sm text-body-sm text-primary font-semibold">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-surface-container-low text-left">
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Startup Name</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Founder</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Industry</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Date Submitted</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center font-body-sm text-body-sm text-on-surface-variant">Loading...</td>
                            </tr>
                        ) : startups.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center font-body-sm text-body-sm text-on-surface-variant">No startups pending review.</td>
                            </tr>
                        ) : (
                            startups.map((item) => (
                                <tr key={item._id} className="border-t border-outline-variant/30">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <span className="w-9 h-9 rounded-lg bg-primary/15 text-primary center font-bold text-body-sm shrink-0">
                                                {item.startupName.charAt(0)}
                                            </span>
                                            <p className="font-body-sm text-body-sm font-bold text-on-surface">{item.startupName}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface">{item.owner?.username}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 rounded-full bg-surface-container-low font-body-sm text-[11px] font-semibold text-on-surface-variant">
                                            {item.industry}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant">
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button onClick={() => handleDecision(item._id, "active")} className="px-4 py-1.5 rounded-lg bg-primary text-on-primary font-body-sm text-[11px] font-bold">
                                                Approve
                                            </button>
                                            <button onClick={() => handleDecision(item._id, "rejected")} className="px-4 py-1.5 rounded-lg bg-error-container text-error font-body-sm text-[11px] font-bold">
                                                Reject
                                            </button>
                                        </div>
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

export default PendingVerifications