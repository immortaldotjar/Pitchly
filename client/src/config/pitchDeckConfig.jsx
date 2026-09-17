export const mockDeck = {
    fileName: "QuantumStream_Pitch_Deck_Q4.pptx",
    size: "18.2 MB",
    updatedAt: "Updated 2 days ago",
    visibility: "Verified Investors",
    stats: {
        views: 128,
        downloads: 14,
        avgTimePerSlide: "42s",
    },
    slides: [
        { id: 1, type: "cover", title: "QuantumStream", subtitle: "Series A Pitch Deck — 2024" },
        {
            id: 2,
            type: "bullets",
            title: "The Problem",
            points: [
                "$200B lost annually to inefficient capital allocation",
                "Manual bank tools can't keep pace with volatility",
                "Institutional tools locked behind massive paywalls",
            ],
        },
        {
            id: 3,
            type: "bullets",
            title: "The Solution",
            points: [
                "Flux engine automates rebalancing in real time",
                "Single-click execution at wholesale rates",
                "API-first integration with existing treasury stacks",
            ],
        },
        { id: 4, type: "metric", title: "Market Opportunity", metric: "$48B", metricLabel: "TAM by 2027" },
        { id: 5, type: "metric", title: "Traction", metric: "15", metricLabel: "Tier-1 Partners Onboarded" },
        { id: 6, type: "metric", title: "The Ask", metric: "$5.2M", metricLabel: "Series A Round" },
    ],
    versions: [
        { id: "v3", label: "Q4 2024 Deck", updatedAt: "Oct 22, 2024", current: true },
        { id: "v2", label: "Q3 2024 Deck", updatedAt: "Jul 14, 2024", current: false },
        { id: "v1", label: "Seed Round Deck", updatedAt: "Jan 09, 2024", current: false },
    ],
}

export const acceptedFileTypes = ".pptx,.pdf,.key"