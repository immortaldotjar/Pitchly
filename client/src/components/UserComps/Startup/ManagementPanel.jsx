import { MdEdit, MdShare, MdDescription, MdVerified } from "react-icons/md"

const ManagementPanel = ({ onEditProfile, onSharePublicLink, onUpdatePitchDeck, onRequestProReview }) => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-5">
            <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wide mb-4">Management</h4>

            <div className="space-y-2">
                <button
                    onClick={onEditProfile}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-bold"
                >
                    <MdEdit size={16} /> Edit Startup Profile
                </button>

                <button
                    onClick={onSharePublicLink}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-outline-variant font-body-sm text-body-sm font-semibold text-on-surface"
                >
                    <MdShare size={16} /> Share Public Link
                </button>

                <button
                    onClick={onUpdatePitchDeck}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-outline-variant font-body-sm text-body-sm font-semibold text-on-surface"
                >
                    <MdDescription size={16} /> Update Pitch Deck
                </button>

                <button
                    onClick={onRequestProReview}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-body-sm text-body-sm font-bold"
                >
                    <MdVerified size={16} /> Request Pro Review
                </button>
            </div>
        </div>
    )
}

export default ManagementPanel