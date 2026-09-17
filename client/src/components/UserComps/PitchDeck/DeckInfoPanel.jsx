import { MdInsertDriveFile, MdDownload, MdRefresh, MdShare } from "react-icons/md"

const DeckInfoPanel = ({ fileName, size, updatedAt, visibility, onReplace, onDownload, onShare }) => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-5">
            <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wide mb-4">Current Deck</h4>

            <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-lg bg-error-container text-error center shrink-0">
                    <MdInsertDriveFile size={20} />
                </span>
                <div className="min-w-0">
                    <p className="font-body-sm text-body-sm font-bold text-on-surface truncate">{fileName}</p>
                    <p className="font-body-sm text-[11px] text-on-surface-variant">{updatedAt} • {size}</p>
                </div>
            </div>

            <div className="space-y-2">
                <button
                    onClick={onDownload}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-outline-variant font-body-sm text-body-sm font-semibold text-on-surface"
                >
                    <MdDownload size={16} /> Download
                </button>
                <button
                    onClick={onShare}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-outline-variant font-body-sm text-body-sm font-semibold text-on-surface"
                >
                    <MdShare size={16} /> Share Public Link
                </button>
                <button
                    onClick={onReplace}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-bold"
                >
                    <MdRefresh size={16} /> Replace Deck
                </button>
            </div>

            <p className="font-body-sm text-[11px] text-on-surface-variant border-t border-outline-variant/50 pt-4 mt-4">
                Visible to <span className="font-bold text-on-surface">{visibility}</span> only.
            </p>
        </div>
    )
}

export default DeckInfoPanel