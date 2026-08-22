import MessageBubble from "./MessageBubble"

const ChatThread = ({ dateLabel, thread, contactAvatar }) => {
    return (
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5">
            <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-outline-variant/50" />
                <span className="font-body-sm text-[11px] text-on-surface-variant shrink-0">{dateLabel}</span>
                <div className="flex-1 h-px bg-outline-variant/50" />
            </div>

            {thread.map((message) => (
                <MessageBubble key={message.id} message={message} avatar={contactAvatar} />
            ))}
        </div>
    )
}

export default ChatThread