import StartupRow from "./StartupRow"

const StartupsTable = ({ startups, selectedIds, onToggleSelect, onToggleSelectAll, onView, onApprove, onToggleSuspend, onReject }) => {

    const allSelected = startups.length > 0 && selectedIds.length === startups.length

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
                        <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Startup</th>
                        <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Industry</th>
                        <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Stage</th>
                        <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Funding Raised</th>
                        <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">Status</th>
                        <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {startups.length === 0 ? (
                        <tr>
                            <td colSpan={7} className="px-6 py-12 text-center font-body-sm text-body-sm text-on-surface-variant">
                                No startups match your search or filters.
                            </td>
                        </tr>
                    ) : (
                        startups.map((startup) => (
                            <StartupRow
                                key={startup.id}
                                startup={startup}
                                selected={selectedIds.includes(startup.id)}
                                onToggleSelect={onToggleSelect}
                                onView={onView}
                                onApprove={onApprove}
                                onToggleSuspend={onToggleSuspend}
                                onReject={onReject}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default StartupsTable