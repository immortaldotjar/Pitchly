import { MdLanguage, MdLink, MdShare } from "react-icons/md"

const ConnectRow = ({ onConnect }) => {
    return (
        <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/50">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wide">Connect:</span>
            <button onClick={() => onConnect?.("website")} className="w-9 h-9 rounded-full border border-outline-variant center text-on-surface-variant">
                <MdLanguage size={16} />
            </button>
            <button onClick={() => onConnect?.("linkedin")} className="w-9 h-9 rounded-full border border-outline-variant center text-on-surface-variant">
                <MdLink size={16} />
            </button>
            <button onClick={() => onConnect?.("share")} className="w-9 h-9 rounded-full border border-outline-variant center text-on-surface-variant">
                <MdShare size={16} />
            </button>
        </div>
    )
}

export default ConnectRow