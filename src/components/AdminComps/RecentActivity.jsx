import { MdFilterList, MdMoreVert } from "react-icons/md"

const activity = [
    { name: "Elena Rodriguez", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80", role: "Investor", roleTone: "bg-primary/10 text-primary", status: "Online", statusColor: "bg-emerald-500", lastActive: "2 mins ago" },
    { name: "James Wilson", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80", role: "Founder", roleTone: "bg-tertiary-fixed text-on-tertiary-fixed", status: "Away", statusColor: "bg-outline-variant", lastActive: "14 mins ago" },
    { name: "Linda Wu", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", role: "Founder", roleTone: "bg-tertiary-fixed text-on-tertiary-fixed", status: "Online", statusColor: "bg-emerald-500", lastActive: "Active Now" },
]

const RecentActivity = () => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 pb-4">
                <div>
                    <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Recent User Activity</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Active session logs and profile updates.</p>
                </div>
                <button className="w-9 h-9 rounded-lg border border-outline-variant center text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150">
                    <MdFilterList size={18} />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-surface-container-low text-left">
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Name</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Role</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Status</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Last Active</th>
                            <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activity.map((user) => (
                            <tr key={user.name} className="border-t border-outline-variant/30">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
                                        <p className="font-body-sm text-body-sm font-bold text-on-surface">{user.name}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full font-body-sm text-[11px] font-semibold ${user.roleTone}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
                                        <span className={`w-2 h-2 rounded-full ${user.statusColor}`} /> {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant">{user.lastActive}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-on-surface-variant hover:text-on-surface transition-colors duration-150">
                                        <MdMoreVert size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentActivity