const ConversationItem = ({ conversation, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors duration-150 ${active ? "bg-primary/10" : "hover:bg-surface-container-low"
                }`}
        >
            {conversation.avatar ? (
                <div className="relative shrink-0">
                    <img src={conversation.avatar} alt={conversation.name} className="w-11 h-11 rounded-full object-cover" />
                    {conversation.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-surface" />
                    )}
                </div>
            ) : (
                <span className="w-11 h-11 rounded-full bg-primary/10 text-primary center font-bold text-body-sm shrink-0">
                    {conversation.initials}
                </span>
            )}

            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                    <p className="font-body-sm text-body-sm font-bold text-on-surface truncate">{conversation.name}</p>
                    <span className="font-body-sm text-[11px] text-on-surface-variant shrink-0">{conversation.time}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <p className="font-body-sm text-[12px] text-on-surface-variant truncate">{conversation.lastMessage}</p>
                    {conversation.unreadCount > 0 && (
                        <span className="w-5 h-5 rounded-full bg-primary text-on-primary center font-body-sm text-[10px] font-bold shrink-0">
                            {conversation.unreadCount}
                        </span>
                    )}
                </div>
            </div>
        </button>
    )
}

export default ConversationItem