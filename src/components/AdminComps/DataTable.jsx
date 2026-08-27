const DataTable = ({ columns, rows, selectedIds, onToggleSelect, onToggleSelectAll, renderActions, emptyLabel }) => {

    const allSelected = rows.length > 0 && selectedIds.length === rows.length

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
                        {columns.map((column) => (
                            <th key={column.key} className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3">
                                {column.label}
                            </th>
                        ))}
                        <th className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wide px-6 py-3 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length + 2} className="px-6 py-12 text-center font-body-sm text-body-sm text-on-surface-variant">
                                {emptyLabel}
                            </td>
                        </tr>
                    ) : (
                        rows.map((row) => (
                            <tr key={row.id} className="border-t border-outline-variant/30">
                                <td className="px-6 py-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedIds.includes(row.id)}
                                        onChange={() => onToggleSelect(row.id)}
                                        className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20"
                                    />
                                </td>
                                {columns.map((column) => (
                                    <td key={column.key} className="px-6 py-4">
                                        {column.render(row)}
                                    </td>
                                ))}
                                <td className="px-6 py-4 text-right">
                                    {renderActions(row)}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable