import { MdPushPin } from "react-icons/md"

const PinnedMessageItem = ({ message }) => {
    return (
        <div className="bg-surface-container-low rounded-xl p-3 relative">
            <MdPushPin className="absolute top-3 right-3 text-on-surface-variant rotate-45" size={14} />
            <p className="font-body-sm text-[12px] text-on-surface italic pr-5">"{message.text}"</p>
            <p className="font-body-sm text-[11px] text-primary font-bold mt-2">{message.date}</p>
        </div>
    )
}

export default PinnedMessageItem