import { useState, useRef, useEffect } from "react"
import { MdMoreVert, MdVisibility, MdBlock, MdCheckCircleOutline, MdDeleteOutline } from "react-icons/md"

const UserActionsMenu = ({ user, onView, onToggleSuspend, onDelete }) => {

    const [open, setOpen] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const isSuspended = user.status === "Suspended"

    return (
        <div className="relative" ref={containerRef}>
            <button onClick={() => setOpen((prev) => !prev)} className="text-on-surface-variant hover:text-on-surface transition-colors duration-150">
                <MdMoreVert size={18} />
            </button>

            {open && (
                <div className="absolute right-0 top-full mt-1 w-44 bg-surface border border-outline-variant rounded-xl shadow-editorial overflow-hidden z-20">
                    <button
                        onClick={() => { onView(user.id); setOpen(false) }}
                        className="w-full flex items-center gap-2 px-4 py-2.5 font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low text-left"
                    >
                        <MdVisibility size={16} /> View Profile
                    </button>
                    <button
                        onClick={() => { onToggleSuspend(user.id); setOpen(false) }}
                        className="w-full flex items-center gap-2 px-4 py-2.5 font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low text-left"
                    >
                        {isSuspended ? <MdCheckCircleOutline size={16} /> : <MdBlock size={16} />}
                        {isSuspended ? "Reactivate User" : "Suspend User"}
                    </button>
                    <button
                        onClick={() => { onDelete(user.id); setOpen(false) }}
                        className="w-full flex items-center gap-2 px-4 py-2.5 font-body-sm text-body-sm text-error hover:bg-error-container/20 text-left"
                    >
                        <MdDeleteOutline size={16} /> Delete User
                    </button>
                </div>
            )}
        </div>
    )
}

export default UserActionsMenu