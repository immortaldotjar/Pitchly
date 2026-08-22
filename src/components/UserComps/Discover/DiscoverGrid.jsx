import FeaturedStartupCard from "./FeaturedStartupCard"
import PromoCard from "./PromoCard"
import StartupCard from "./StartupCard"
import EmptyState from "./EmptyState"

const DiscoverGrid = ({ startups, promo, onViewProfile, onApplyPromo, onBookmark, onCompare, onResetFilters }) => {

    if (startups.length === 0) {
        return (
            <div className="columns-1 sm:columns-2 xl:columns-3 gap-6">
                <EmptyState onReset={onResetFilters} />
            </div>
        )
    }

    const promoInsertIndex = Math.min(3, startups.length)

    return (
        <div className="columns-1 sm:columns-2 xl:columns-3 gap-6">
            {startups.slice(0, promoInsertIndex).map((startup) =>
                startup.featured
                    ? <FeaturedStartupCard key={startup.id} startup={startup} onViewProfile={onViewProfile} />
                    : <StartupCard key={startup.id} startup={startup} onBookmark={onBookmark} onCompare={onCompare} />
            )}

            {promo && <PromoCard promo={promo} onApply={onApplyPromo} />}

            {startups.slice(promoInsertIndex).map((startup) =>
                startup.featured
                    ? <FeaturedStartupCard key={startup.id} startup={startup} onViewProfile={onViewProfile} />
                    : <StartupCard key={startup.id} startup={startup} onBookmark={onBookmark} onCompare={onCompare} />
            )}
        </div>
    )
}

export default DiscoverGrid