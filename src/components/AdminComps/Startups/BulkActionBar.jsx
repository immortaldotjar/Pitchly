import { MdBlock, MdCancel, MdClose } from "react-icons/md"

const BulkActionBar = ({ count, onSuspendSelected, onRejectSelected, onClear }) => {
    return (
        <div className="flex items-center justify-between px-6 py-3 bg-primary/5 border-t border-b border-outline-variant">
            <div className="flex items-center gap-3">
                <button onClick={onClear} className="text-on-surface-variant">
                    <MdClose size={18} />
                </button>
                <span className="font-body-sm text-body-sm font-semibold text-on-surface">{count} selected</span>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={onSuspendSelected}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-outline-variant font-body-sm text-[12px] font-semibold text-on-surface"
                >
                    <MdBlock size={16} /> Suspend
                </button>
                <button
                    onClick={onRejectSelected}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-error text-on-error font-body-sm text-[12px] font-bold"
                >
                    <MdCancel size={16} /> Reject
                </button>
            </div>
        </div>
    )
}

export default BulkActionBar