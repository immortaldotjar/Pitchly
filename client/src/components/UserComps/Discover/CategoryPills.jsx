const CategoryPills = ({ categories, active, onChange }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onChange(category)}
                    className={`px-4 py-2 rounded-full font-body-sm text-body-sm font-semibold transition-colors duration-150 ${active === category
                        ? "bg-primary text-on-primary"
                        : "bg-surface border border-outline-variant text-on-surface-variant hover:border-primary"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default CategoryPills