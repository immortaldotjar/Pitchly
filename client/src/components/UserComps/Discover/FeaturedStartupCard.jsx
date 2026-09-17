import { MdArrowForward } from "react-icons/md"

const FeaturedStartupCard = ({ startup, onViewProfile }) => {
    return (
        <div className="[column-span:_all] bg-surface border border-outline-variant rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 mb-6 break-inside-avoid">
            <div className="relative h-56 sm:h-full">
                <img src={startup.image} alt={startup.name} className="w-full h-full object-cover" />
                <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur text-white font-label-caps text-[10px] font-bold uppercase tracking-wide">
                    {startup.badge}
                </span>
            </div>

            <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <img src={startup.logo} alt={startup.name} className="w-9 h-9 rounded-lg object-cover" />
                    <div>
                        <h4 className="font-headline-md text-body-lg font-bold text-on-surface">{startup.name}</h4>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">{startup.category} • {startup.stage}</p>
                    </div>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">{startup.description}</p>

                <div className="flex flex-wrap gap-2">
                    {startup.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-surface-container-low font-label-caps text-[10px] font-semibold text-on-surface-variant uppercase tracking-wide">
                            {tag}
                        </span>
                    ))}
                </div>

                <button
                    onClick={() => onViewProfile?.(startup.id)}
                    className="flex items-center justify-center gap-2 mt-2 py-2.5 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-bold"
                >
                    View Profile <MdArrowForward size={16} />
                </button>
            </div>
        </div>
    )
}

export default FeaturedStartupCard