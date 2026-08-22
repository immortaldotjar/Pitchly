import { MdChatBubbleOutline } from "react-icons/md"

const MentorFeedbackPanel = ({ feedback, totalComments, visibility, onReadAll }) => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wide">Mentor Feedback</h4>
                <MdChatBubbleOutline className="text-on-surface-variant" size={18} />
            </div>

            <div className="space-y-4">
                {feedback.map((item) => (
                    <div key={item.name} className="flex gap-3">
                        <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
                        <div>
                            <p className="font-body-sm text-[12px] font-bold text-on-surface">{item.name} • {item.role}</p>
                            <p className="font-body-sm text-[12px] text-on-surface-variant italic mt-0.5">"{item.quote}"</p>
                            <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wide mt-1">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={onReadAll} className="font-body-sm text-body-sm text-primary font-semibold mt-4">
                Read All {totalComments} Comments
            </button>

            <p className="font-body-sm text-[11px] text-on-surface-variant border-t border-outline-variant/50 pt-4 mt-4">
                Your profile is currently visible to <span className="font-bold text-on-surface">{visibility}</span> only.
                Manage visibility in settings.
            </p>
        </div>
    )
}

export default MentorFeedbackPanel