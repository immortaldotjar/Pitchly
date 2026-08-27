import { useState, useRef, useEffect } from "react"
import { MdMoreVert } from "react-icons/md"

const ActionsMenu = ({ actions }) => {

    const [open, setOpen] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const visibleActions = actions.filter((action) => action.visible !== false)

    return (
        <div className="relative" ref={containerRef}>
            <button onClick={() => setOpen((prev) => !prev)} className="text-on-surface-variant hover:text-on-surface transition-colors duration-150">
                <MdMoreVert size={18} />
            </button>

            {open && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-surface border border-outline-variant rounded-xl shadow-editorial overflow-hidden z-20">
                    {visibleActions.map((action) => (
                        <button
                            key={action.label}
                            onClick={() => { action.onClick(); setOpen(false) }}
                            className={`w-full flex items-center gap-2 px-4 py-2.5 font-body-sm text-body-sm text-left ${action.danger
                                ? "text-error hover:bg-error-container/20"
                                : action.tone === "primary"
                                    ? "text-primary hover:bg-primary/5"
                                    : "text-on-surface hover:bg-surface-container-low"
                                }`}
                        >
                            <action.icon size={16} /> {action.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ActionsMenu