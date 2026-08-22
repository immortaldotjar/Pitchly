import { MdDoneAll } from "react-icons/md"

const MessageBubble = ({ message, avatar }) => {

    const isMine = message.sender === "me"

    return (
        <div className={`flex items-end gap-2 ${isMine ? "justify-end" : "justify-start"}`}>
            {!isMine && <img src={avatar} alt="" className="w-7 h-7 rounded-full object-cover shrink-0" />}

            <div className={`flex flex-col ${isMine ? "items-end" : "items-start"} max-w-[70%]`}>
                <div
                    className={`px-4 py-2.5 rounded-2xl font-body-sm text-body-sm ${isMine
                        ? "bg-primary text-on-primary rounded-br-sm"
                        : "bg-surface-container-low text-on-surface rounded-bl-sm"
                        }`}
                >
                    {message.text}
                </div>
                <div className="flex items-center gap-1 mt-1">
                    <span className="font-body-sm text-[11px] text-on-surface-variant">{message.time}</span>
                    {isMine && message.status === "read" && <MdDoneAll className="text-primary" size={14} />}
                </div>
            </div>
        </div>
    )
}

export default MessageBubble