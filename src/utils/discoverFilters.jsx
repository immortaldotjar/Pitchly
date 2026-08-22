const sortComparators = {
    Trending: (a, b) => b.trendingScore - a.trendingScore,
    Newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    "Most Funded": (a, b) => b.fundingGoalAmount - a.fundingGoalAmount,
    Alphabetical: (a, b) => a.name.localeCompare(b.name),
}

export const applyDiscoverFilters = (startups, { category, filters, sort }) => {

    let result = [...startups]

    if (category !== "All") {
        result = result.filter((startup) => startup.category === category)
    }

    if (filters.industries.length > 0) {
        result = result.filter((startup) =>
            startup.industries.some((industry) => filters.industries.includes(industry))
        )
    }

    if (filters.stage !== "Any Stage") {
        result = result.filter((startup) => startup.stage === filters.stage)
    }

    result = result.filter((startup) => startup.fundingGoalAmount <= filters.fundingGoal)

    if (filters.location.trim() !== "") {
        const query = filters.location.trim().toLowerCase()
        result = result.filter((startup) => startup.location.toLowerCase().includes(query))
    }

    const comparator = sortComparators[sort] ?? sortComparators.Trending
    result.sort(comparator)

    return result
}