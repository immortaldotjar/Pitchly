import StartupStatusBadge from "./StartupStatusBadge"
import StartupActionsMenu from "./StartupActionsMenu"

const StartupRow = ({ startup, selected, onToggleSelect, onView, onApprove, onToggleSuspend, onReject }) => {
    return (
        <tr className="border-t border-outline-variant/30">
            <td className="px-6 py-4">
                <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => onToggleSelect(startup.id)}
                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20"
                />
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <span className={`w-9 h-9 rounded-lg center font-bold text-body-sm shrink-0 ${startup.tone}`}>
                        {startup.initial}
                    </span>
                    <div>
                        <p className="font-body-sm text-body-sm font-bold text-on-surface">{startup.name}</p>
                        <p className="font-body-sm text-[11px] text-on-surface-variant">{startup.founder}</p>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4">
                <span className="px-2.5 py-1 rounded-full bg-surface-container-low font-body-sm text-[11px] font-semibold text-on-surface-variant">
                    {startup.industry}
                </span>
            </td>
            <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant">{startup.stage}</td>
            <td className="px-6 py-4 font-numeric-data text-body-sm text-on-surface">{startup.fundingRaised}</td>
            <td className="px-6 py-4"><StartupStatusBadge status={startup.status} /></td>
            <td className="px-6 py-4 text-right">
                <StartupActionsMenu startup={startup} onView={onView} onApprove={onApprove} onToggleSuspend={onToggleSuspend} onReject={onReject} />
            </td>
        </tr>
    )
}

export default StartupRow