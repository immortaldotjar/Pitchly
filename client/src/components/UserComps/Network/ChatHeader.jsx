import { MdMoreVert } from "react-icons/md"

const ChatHeader = ({ contact }) => {
    return (
        <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant shrink-0">
            <div className="flex items-center gap-3">
                {contact.avatar ? (
                    <div className="relative">
                        <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full object-cover" />
                        {contact.online && (
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-surface" />
                        )}
                    </div>
                ) : (
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary center font-bold text-body-sm">
                        {contact.initials}
                    </span>
                )}

                <div>
                    <p className="font-body-sm text-body-sm font-bold text-on-surface">{contact.name}</p>
                    <p className={`font-body-sm text-[11px] ${contact.online ? "text-emerald-600" : "text-on-surface-variant"}`}>
                        {contact.online ? "Online" : "Offline"}
                    </p>
                </div>
            </div>

            <button className="text-on-surface-variant">
                <MdMoreVert size={20} />
            </button>
        </div>
    )
}

export default ChatHeader