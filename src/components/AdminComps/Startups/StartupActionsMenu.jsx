import { useState, useRef, useEffect } from "react"
import { MdMoreVert, MdVisibility, MdCheckCircleOutline, MdBlock, MdCancel } from "react-icons/md"

const StartupActionsMenu = ({ startup, onView, onApprove, onToggleSuspend, onReject }) => {

    const [open, setOpen] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const isSuspended = startup.status === "Suspended"
    const isPending = startup.status === "Pending Review"

    return (
        <div className="relative" ref={containerRef}>
            <button onClick={() => setOpen((prev) => !prev)} className="text-on-surface-variant hover:text-on-surface transition-colors duration-150">
                <MdMoreVert size={18} />
            </button>

            {open && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-surface border border-outline-variant rounded-xl shadow-editorial overflow-hidden z-20">
                    <button
                        onClick={() => { onView(startup.id); setOpen(false) }}
                        className="w-full flex items-center gap-2 px-4 py-2.5 font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low text-left"
                    >
                        <MdVisibility size={16} /> View Profile
                    </button>

                    {isPending && (
                        <button
                            onClick={() => { onApprove(startup.id); setOpen(false) }}
                            className="w-full flex items-center gap-2 px-4 py-2.5 font-body-sm text-body-sm text-primary hover:bg-primary/5 text-left"
                        >
                            <MdCheckCircleOutline size={16} /> Approve Startup
                        </button>
                    )}

                    {!isPending && (
                        <button
                            onClick={() => { onToggleSuspend(startup.id); setOpen(false) }}
                            className="w-full flex items-center gap-2 px-4 py-2.5 font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low text-left"
                        >
                            {isSuspended ? <MdCheckCircleOutline size={16} /> : <MdBlock size={16} />}
                            {isSuspended ? "Reactivate" : "Suspend"}
                        </button>
                    )}

                    <button
                        onClick={() => { onReject(startup.id); setOpen(false) }}
                        className="w-full flex items-center gap-2 px-4 py-2.5 font-body-sm text-body-sm text-error hover:bg-error-container/20 text-left"
                    >
                        <MdCancel size={16} /> Reject / Remove
                    </button>
                </div>
            )}
        </div>
    )
}

export default StartupActionsMenu