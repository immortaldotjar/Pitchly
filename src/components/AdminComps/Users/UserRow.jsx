import UserRoleBadge from "./UserRoleBadge"
import UserStatusBadge from "./UserStatusBadge"
import UserActionsMenu from "./UserActionsMenu"

const UserRow = ({ user, selected, onToggleSelect, onView, onToggleSuspend, onDelete }) => {
    return (
        <tr className="border-t border-outline-variant/30">
            <td className="px-6 py-4">
                <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => onToggleSelect(user.id)}
                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20"
                />
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                        <p className="font-body-sm text-body-sm font-bold text-on-surface">{user.name}</p>
                        <p className="font-body-sm text-[11px] text-on-surface-variant">{user.email}</p>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4"><UserRoleBadge role={user.role} /></td>
            <td className="px-6 py-4"><UserStatusBadge status={user.status} /></td>
            <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant">{user.startup ?? "—"}</td>
            <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant">{user.lastActive}</td>
            <td className="px-6 py-4 text-right">
                <UserActionsMenu user={user} onView={onView} onToggleSuspend={onToggleSuspend} onDelete={onDelete} />
            </td>
        </tr>
    )
}

export default UserRow