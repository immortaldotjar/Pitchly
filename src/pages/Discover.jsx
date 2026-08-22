import { useState, useMemo, useEffect } from "react"
import DiscoverHeader from "../components/UserComps/Discover/DiscoverHeader"
import CategoryPills from "../components/UserComps/Discover/CategoryPills"
import FilterSidebar from "../components/UserComps/Discover/FilterSidebar"
import DiscoverGrid from "../components/UserComps/Discover/DiscoverGrid"
import LoadMoreButton from "../components/UserComps/Discover/LoadMoreButton"
import { applyDiscoverFilters } from "../utils/discoverFilters"
import { categoryPills, defaultFilters, mockStartups, promoCard, sortOptions } from "../config/discoverConfig"

const PAGE_SIZE = 4

const Discover = () => {

    const [activeCategory, setActiveCategory] = useState(categoryPills[0])
    const [sortValue, setSortValue] = useState(sortOptions[0])
    const [filters, setFilters] = useState(defaultFilters)
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
    const [loading, setLoading] = useState(false)

    const filteredStartups = useMemo(
        () => applyDiscoverFilters(mockStartups, { category: activeCategory, filters, sort: sortValue }),
        [activeCategory, filters, sortValue]
    )

    useEffect(() => {
        setVisibleCount(PAGE_SIZE)
    }, [activeCategory, filters, sortValue])

    const visibleStartups = filteredStartups.slice(0, visibleCount)
    const hasMore = visibleCount < filteredStartups.length

    const handleResetFilters = () => {
        setActiveCategory(categoryPills[0])
        setFilters(defaultFilters)
    }

    const handleLoadMore = () => {
        setLoading(true)
        setTimeout(() => {
            setVisibleCount((count) => count + PAGE_SIZE)
            setLoading(false)
        }, 500)
    }

    const handleViewProfile = (id) => {
        console.log("view profile", id)
    }

    const handleApplyPromo = (id) => {
        console.log("apply promo", id)
    }

    const handleBookmark = (id) => {
        console.log("bookmark", id)
    }

    const handleCompare = (id) => {
        console.log("compare", id)
    }

    return (
        <>
            <DiscoverHeader sortValue={sortValue} onSortChange={setSortValue} />

            <CategoryPills categories={categoryPills} active={activeCategory} onChange={setActiveCategory} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                <div className="lg:col-span-1">
                    <FilterSidebar filters={filters} onChange={setFilters} onReset={() => setFilters(defaultFilters)} />
                </div>

                <div className="lg:col-span-3 space-y-6">
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {filteredStartups.length} {filteredStartups.length === 1 ? "startup" : "startups"} found
                    </p>

                    <DiscoverGrid
                        startups={visibleStartups}
                        promo={promoCard}
                        onViewProfile={handleViewProfile}
                        onApplyPromo={handleApplyPromo}
                        onBookmark={handleBookmark}
                        onCompare={handleCompare}
                        onResetFilters={handleResetFilters}
                    />

                    {hasMore && <LoadMoreButton onClick={handleLoadMore} loading={loading} />}
                </div>
            </div>
        </>
    )
}

export default Discover