import { MdSearch } from "react-icons/md"
import Select from "../Select"

const TableToolbar = ({ search, onSearchChange, searchPlaceholder, pillOptions, activePill, onPillChange, statusOptions, status, onStatusChange }) => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-6 pb-4">
            <div className="relative flex-1 max-w-xs">
                <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder={searchPlaceholder}
                    className="w-full pl-9 pr-3 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-body-sm font-body-md focus:outline-none focus:border-primary transition-colors duration-150"
                />
            </div>

            <div className="flex flex-wrap gap-2">
                {pillOptions.map((option) => (
                    <button
                        key={option}
                        onClick={() => onPillChange(option)}
                        className={`px-3.5 py-2 rounded-lg font-body-sm text-[12px] font-semibold transition-colors duration-150 ${activePill === option
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container-low text-on-surface-variant hover:text-on-surface"
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <div className="w-full sm:w-44 sm:ml-auto">
                <Select id="status-filter" value={status} onChange={(e) => onStatusChange(e.target.value)} options={statusOptions} />
            </div>
        </div>
    )
}

export default TableToolbar