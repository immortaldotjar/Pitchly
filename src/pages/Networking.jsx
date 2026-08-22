import { useState } from "react"
import ConversationList from "../components/UserComps/Network/ConversationList"
import ChatHeader from "../components/UserComps/Network/ChatHeader"
import ChatThread from "../components/UserComps/Network/ChatThread"
import ChatInput from "../components/UserComps/Network/ChatInput"
import ContactProfilePanel from "../components/UserComps/Network/ContactProfilePanel"
import { conversations, messagesByConversation, profileByConversation } from "../config/networkingConfig"

const Networking = () => {

    const [activeId, setActiveId] = useState(conversations[0].id)

    const activeConversation = conversations.find((conversation) => conversation.id === activeId)
    const activeThread = messagesByConversation[activeId]
    const activeProfile = profileByConversation[activeId]

    const handleSend = (text) => {
        console.log("send message", { to: activeId, text })
    }

    const handleScheduleMeeting = () => {
        console.log("schedule meeting with", activeId)
    }

    return (
        <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden h-[calc(100vh-9rem)] flex">
            <ConversationList conversations={conversations} activeId={activeId} onSelect={setActiveId} />

            <div className="flex-1 flex flex-col min-w-0">
                <ChatHeader contact={activeConversation} />
                <ChatThread
                    dateLabel={activeThread.dateLabel}
                    thread={activeThread.thread}
                    contactAvatar={activeConversation.avatar}
                />
                <ChatInput onSend={handleSend} />
            </div>

            <ContactProfilePanel profile={activeProfile} onScheduleMeeting={handleScheduleMeeting} />
        </div>
    )
}

export default Networking