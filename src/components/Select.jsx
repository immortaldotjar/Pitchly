import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { MdKeyboardArrowDown, MdCheck } from "react-icons/md"

const Select = ({ label, id, value, onChange, options, placeholder, className = "" }) => {

    const [open, setOpen] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleSelect = (option) => {
        onChange({ target: { value: option } })
        setOpen(false)
    }

    return (
        <div className="flex flex-col gap-2" ref={containerRef}>
            {label && (
                <label htmlFor={id} className="font-label-caps text-label-caps text-on-surface-variant px-1 pt-4">
                    {label}
                </label>
            )}

            <div className="relative">
                <button
                    type="button"
                    id={id}
                    onClick={() => setOpen((prev) => !prev)}
                    className={`w-full flex items-center justify-between px-4 py-2 bg-surface-container-low border rounded-lg text-body-sm font-body-md text-left transition-all duration-150 ${open ? "border-primary" : "border-outline-variant"
                        } ${value ? "text-on-surface" : "text-on-surface-variant"} ${className}`}
                >
                    <span>{value || placeholder}</span>
                    <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-on-surface-variant shrink-0"
                    >
                        <MdKeyboardArrowDown size={18} />
                    </motion.span>
                </button>

                <AnimatePresence>
                    {open && (
                        <motion.ul
                            initial={{ opacity: 0, y: -6, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.98 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="absolute z-20 top-[calc(100%+6px)] left-0 right-0 bg-surface border border-outline-variant rounded-lg shadow-editorial overflow-hidden max-h-56 overflow-y-auto"
                        >
                            {options.map((option) => {
                                const isSelected = value === option
                                return (
                                    <li key={option}>
                                        <button
                                            type="button"
                                            onClick={() => handleSelect(option)}
                                            className={`w-full flex items-center justify-between px-4 py-2.5 text-body-sm font-body-md text-left transition-colors duration-100 ${isSelected
                                                ? "bg-primary/10 text-primary font-semibold"
                                                : "text-on-surface hover:bg-surface-container-low"
                                                }`}
                                        >
                                            {option}
                                            {isSelected && <MdCheck size={16} />}
                                        </button>
                                    </li>
                                )
                            })}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Select