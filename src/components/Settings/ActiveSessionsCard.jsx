import { MdLaptop, MdPhoneIphone } from "react-icons/md"

const ActiveSessionsCard = ({ sessions, onRevoke }) => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 space-y-4">
            <div>
                <p className="font-body-sm text-body-sm font-bold text-on-surface">Active Sessions</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant">Manage your currently logged-in devices across all platforms.</p>
            </div>

            <div className="space-y-3">
                {sessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between gap-3 p-3 rounded-xl border border-outline-variant/30">
                        <div className="flex items-center gap-3 min-w-0">
                            <span className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface-variant center shrink-0">
                                {session.type === "mobile" ? <MdPhoneIphone size={18} /> : <MdLaptop size={18} />}
                            </span>
                            <div className="min-w-0">
                                <p className="font-body-sm text-body-sm font-bold text-on-surface truncate">{session.device}</p>
                                <p className="font-body-sm text-[11px] text-on-surface-variant flex items-center gap-1.5">
                                    {session.current && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                                    {session.location} • {session.status}
                                </p>
                            </div>
                        </div>

                        {!session.current && (
                            <button
                                onClick={() => onRevoke(session.id)}
                                className="font-body-sm text-[12px] font-semibold text-primary shrink-0"
                            >
                                Revoke Access
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActiveSessionsCard