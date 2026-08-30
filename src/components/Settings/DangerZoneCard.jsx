import { MdWarningAmber } from "react-icons/md"

const DangerZoneCard = ({ onDeactivate, onDeleteAccount }) => {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <MdWarningAmber className="text-error" size={20} />
                <h3 className="font-headline-md text-body-lg font-bold text-error">Danger Zone</h3>
            </div>

            <div className="bg-error-container/20 border border-error/30 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <p className="font-body-sm text-body-sm font-bold text-error">Deactivate Account</p>
                    <p className="font-body-sm text-[12px] text-on-surface-variant">Temporarily disable your profile and visibility. You can reactivate anytime by logging back in.</p>
                </div>
                <button
                    onClick={onDeactivate}
                    className="px-4 py-2 rounded-lg border border-error text-error font-body-sm text-body-sm font-semibold shrink-0"
                >
                    Deactivate Account
                </button>
            </div>

            <div className="bg-surface border border-outline-variant rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <p className="font-body-sm text-body-sm font-bold text-error">Delete Account Permanently</p>
                    <p className="font-body-sm text-[12px] text-on-surface-variant">This action is irreversible. All your pitch decks, network history, and personal data will be erased.</p>
                </div>
                <button
                    onClick={onDeleteAccount}
                    className="px-4 py-2 rounded-lg bg-error text-on-error font-body-sm text-body-sm font-bold shrink-0"
                >
                    Request Deletion
                </button>
            </div>
        </div>
    )
}

export default DangerZoneCard