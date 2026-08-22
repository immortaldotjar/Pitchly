import { MdInsertChartOutlined } from "react-icons/md"
import SharedFileItem from "./SharedFileItem"
import PinnedMessageItem from "./PinnedMessageItem"

const ContactProfilePanel = ({ profile, onScheduleMeeting }) => {
    return (
        <div className="w-full lg:w-72 shrink-0 border-l border-outline-variant h-full overflow-y-auto p-5 space-y-6">
            <div className="text-center">
                {profile.avatar ? (
                    <img src={profile.avatar} alt={profile.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-3" />
                ) : (
                    <span className="w-20 h-20 rounded-full bg-primary/10 text-primary center font-bold text-headline-md mx-auto mb-3">
                        {profile.initials}
                    </span>
                )}
                <p className="font-headline-md text-body-lg font-bold text-on-surface">{profile.name}</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{profile.role}</p>

                <button
                    onClick={onScheduleMeeting}
                    className="w-full mt-4 py-2.5 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-bold"
                >
                    Schedule Meeting
                </button>
            </div>

            {profile.investmentFocus && (
                <div className="border-t border-outline-variant pt-5">
                    <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wide mb-3">Investment Focus</p>
                    <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary center shrink-0">
                            <MdInsertChartOutlined size={18} />
                        </span>
                        <div>
                            <p className="font-body-sm text-body-sm font-bold text-on-surface">{profile.investmentFocus.firm}</p>
                            <p className="font-body-sm text-[11px] text-on-surface-variant">{profile.investmentFocus.category}</p>
                        </div>
                    </div>
                </div>
            )}

            {profile.sharedFiles.length > 0 && (
                <div className="border-t border-outline-variant pt-5">
                    <div className="flex items-center justify-between mb-3">
                        <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wide">Shared Files</p>
                        <button className="font-body-sm text-[11px] text-primary font-semibold">View all</button>
                    </div>
                    <div className="space-y-3">
                        {profile.sharedFiles.map((file) => (
                            <SharedFileItem key={file.name} file={file} />
                        ))}
                    </div>
                </div>
            )}

            {profile.pinnedMessages.length > 0 && (
                <div className="border-t border-outline-variant pt-5">
                    <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wide mb-3">Pinned Messages</p>
                    <div className="space-y-3">
                        {profile.pinnedMessages.map((message) => (
                            <PinnedMessageItem key={message.date} message={message} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContactProfilePanel