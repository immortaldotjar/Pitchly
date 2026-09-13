import { MdDownload } from "react-icons/md"

const PitchDeckCard = ({ fileName, updatedAt, size, thumbnail }) => {
    return (
        <div>
            <h3 className="font-headline-md text-body-lg font-bold text-primary mb-4">Series A Pitch Deck</h3>

            <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden">
                <img src={thumbnail} alt={fileName} className="w-full h-48 object-cover" />

                <div className="flex items-center justify-between p-4">
                    <div className="min-w-0">
                        <p className="font-body-sm text-body-sm font-bold text-on-surface truncate">{fileName}</p>
                        <p className="font-body-sm text-[11px] text-on-surface-variant">{updatedAt} • {size}</p>
                    </div>
                    <button className="w-9 h-9 rounded-lg border border-outline-variant center text-on-surface-variant shrink-0">
                        <MdDownload size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PitchDeckCard