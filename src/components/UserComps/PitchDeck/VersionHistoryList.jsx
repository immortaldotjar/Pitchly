import { MdDownload, MdRestore } from "react-icons/md"

const VersionHistoryList = ({ versions, onRestore, onDownload }) => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-5">
            <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wide mb-4">Version History</h4>

            <div className="space-y-3">
                {versions.map((version) => (
                    <div key={version.id} className="flex items-center justify-between gap-2">
                        <div className="min-w-0">
                            <p className="font-body-sm text-body-sm font-bold text-on-surface truncate">
                                {version.label} {version.current && <span className="text-primary">(Current)</span>}
                            </p>
                            <p className="font-body-sm text-[11px] text-on-surface-variant">{version.updatedAt}</p>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                            <button onClick={() => onDownload?.(version.id)} className="w-8 h-8 rounded-lg border border-outline-variant center text-on-surface-variant">
                                <MdDownload size={14} />
                            </button>
                            {!version.current && (
                                <button onClick={() => onRestore?.(version.id)} className="w-8 h-8 rounded-lg border border-outline-variant center text-on-surface-variant">
                                    <MdRestore size={14} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VersionHistoryList