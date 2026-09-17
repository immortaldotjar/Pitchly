import { MdClose } from "react-icons/md"

const BulkActionBar = ({ count, actions, onClear }) => {
    return (
        <div className="flex items-center justify-between px-6 py-3 bg-primary/5 border-t border-b border-outline-variant">
            <div className="flex items-center gap-3">
                <button onClick={onClear} className="text-on-surface-variant">
                    <MdClose size={18} />
                </button>
                <span className="font-body-sm text-body-sm font-semibold text-on-surface">{count} selected</span>
            </div>

            <div className="flex items-center gap-2">
                {actions.map((action) => (
                    <button
                        key={action.label}
                        onClick={action.onClick}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-body-sm text-[12px] font-semibold ${action.danger
                            ? "bg-error text-on-error font-bold"
                            : "border border-outline-variant text-on-surface"
                            }`}
                    >
                        <action.icon size={16} /> {action.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default BulkActionBar