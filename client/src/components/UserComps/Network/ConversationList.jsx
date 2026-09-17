import { MdSearch } from "react-icons/md"
import ConversationItem from "./ConversationItem"

const ConversationList = ({ conversations, activeId, onSelect }) => {

    const pinned = conversations.filter((conversation) => conversation.pinned)
    const others = conversations.filter((conversation) => !conversation.pinned)

    return (
        <div className="w-full lg:w-72 shrink-0 border-r border-outline-variant flex flex-col h-full">
            <div className="p-4 shrink-0">
                <h2 className="font-headline-md text-body-lg font-bold text-on-surface mb-3">Messages</h2>
                <div className="relative">
                    <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
                    <input
                        type="text"
                        placeholder="Search conversations..."
                        className="w-full pl-9 pr-3 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-body-sm font-body-md focus:outline-none focus:border-primary transition-colors duration-150"
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-2 pb-4 space-y-4">
                {pinned.length > 0 && (
                    <div>
                        <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wide px-3 mb-1">Pinned</p>
                        <div className="space-y-1">
                            {pinned.map((conversation) => (
                                <ConversationItem
                                    key={conversation.id}
                                    conversation={conversation}
                                    active={conversation.id === activeId}
                                    onClick={() => onSelect(conversation.id)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                <div>
                    <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wide px-3 mb-1">All Messages</p>
                    <div className="space-y-1">
                        {others.map((conversation) => (
                            <ConversationItem
                                key={conversation.id}
                                conversation={conversation}
                                active={conversation.id === activeId}
                                onClick={() => onSelect(conversation.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConversationList