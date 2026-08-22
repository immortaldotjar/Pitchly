import { MdBolt } from "react-icons/md"

const InvestorInterestPanel = ({ profileViews, deckDownloads, newInquiries, onViewInquiries }) => {
    return (
        <div className="bg-primary text-on-primary rounded-2xl p-5">
            <h4 className="font-label-caps text-[10px] text-on-primary/60 uppercase tracking-wide mb-4">Investor Interest</h4>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <p className="font-numeric-data text-2xl font-bold">{profileViews}</p>
                    <p className="font-label-caps text-[10px] text-on-primary/60 uppercase tracking-wide">Profile Views (7d)</p>
                </div>
                <div>
                    <p className="font-numeric-data text-2xl font-bold">{deckDownloads}</p>
                    <p className="font-label-caps text-[10px] text-on-primary/60 uppercase tracking-wide">Deck Downloads</p>
                </div>
            </div>

            <div className="bg-white/10 rounded-xl p-3 flex items-center gap-2 mb-4">
                <MdBolt size={18} />
                <div>
                    <p className="font-body-sm text-body-sm font-bold">{newInquiries} New Inquiries</p>
                    <p className="font-body-sm text-[11px] text-on-primary/60">Awaiting response</p>
                </div>
            </div>

            <button
                onClick={onViewInquiries}
                className="w-full py-2.5 rounded-lg bg-on-primary text-primary font-body-sm text-body-sm font-bold"
            >
                View Inquiry List
            </button>
        </div>
    )
}

export default InvestorInterestPanel