import { MdSearchOff } from "react-icons/md"

const EmptyState = ({ onReset }) => {
    return (
        <div className="[column-span:all] flex flex-col items-center text-center gap-3 py-16">
            <span className="w-12 h-12 rounded-full bg-surface-container-low text-on-surface-variant center">
                <MdSearchOff size={22} />
            </span>
            <p className="font-body-md text-body-md font-bold text-on-surface">No startups match your filters</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
                Try widening your funding range or clearing an industry filter.
            </p>
            <button onClick={onReset} className="font-body-sm text-body-sm text-primary font-semibold mt-1">
                Reset all filters
            </button>
        </div>
    )
}

export default EmptyState