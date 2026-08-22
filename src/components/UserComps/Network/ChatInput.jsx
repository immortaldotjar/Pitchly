import { useState } from "react"
import { MdAttachFile, MdEmojiEmotions, MdSend } from "react-icons/md"

const ChatInput = ({ onSend }) => {

    const [value, setValue] = useState("")

    const handleSend = () => {
        if (value.trim() === "") return
        onSend?.(value.trim())
        setValue("")
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <div className="border-t border-outline-variant p-4 shrink-0">
            <div className="bg-surface-container-low border border-outline-variant rounded-2xl px-4 py-3">
                <textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={2}
                    placeholder="Type a message..."
                    className="w-full bg-transparent resize-none font-body-md text-body-md focus:outline-none"
                />

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3 text-on-surface-variant">
                        <button type="button"><MdAttachFile size={18} /></button>
                        <button type="button"><MdEmojiEmotions size={18} /></button>
                    </div>

                    <button
                        onClick={handleSend}
                        className="w-9 h-9 rounded-full bg-primary text-on-primary center"
                    >
                        <MdSend size={16} />
                    </button>
                </div>
            </div>

            <p className="font-body-sm text-[11px] text-on-surface-variant text-center mt-2">
                Press Enter to send, Shift + Enter for newline
            </p>
        </div>
    )
}

export default ChatInput