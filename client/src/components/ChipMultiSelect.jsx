const ChipMultiSelect = ({ label, options, selected, onToggle }) => {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="font-label-caps text-label-caps text-on-surface-variant px-1 pt-4">
                    {label}
                </label>
            )}
            <div className="flex flex-wrap gap-2">
                {options.map((option) => {
                    const isSelected = selected.includes(option)
                    return (
                        <button
                            key={option}
                            type="button"
                            onClick={() => onToggle(option)}
                            className={`px-4 py-1.5 rounded-full font-body-sm text-body-sm border transition-colors duration-150 ${isSelected
                                ? "bg-primary text-on-primary border-primary"
                                : "border-outline-variant text-on-surface-variant hover:border-primary"
                                }`}
                        >
                            {option}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default ChipMultiSelect