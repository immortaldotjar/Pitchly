import UserRow from "./UserRow"

const UsersTable = ({ users, selectedIds, onToggleSelect, onToggleSelectAll, onView, onToggleSuspend, onDelete }) => {

    const allSelected = users.length > 0 && selectedIds.length === users.length

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="bg-surface-container-low text-left">
                        <th className="px-6 py-3">
                            <input
                                type="checkbox"
                                checked={allSelected}
                                onChange={onToggleSelectAll}
                                className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20"
                            />
                        </th>
                        <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">User</th>
                        <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Role</th>
                        <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Status</th>
                        <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Startup</th>
                        <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Last Active</th>
                        <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan={7} className="px-6 py-12 text-center font-body-sm text-body-sm text-on-surface-variant">
                                No users match your search or filters.
                            </td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <UserRow
                                key={user.id}
                                user={user}
                                selected={selectedIds.includes(user.id)}
                                onToggleSelect={onToggleSelect}
                                onView={onView}
                                onToggleSuspend={onToggleSuspend}
                                onDelete={onDelete}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable