export const tierFilters = ["All", "Tier 1", "Tier 2", "Tier 3"]

export const approvalStatusFilters = ["All Statuses", "Pending", "Approved", "Rejected"]

export const statusDotTone = {
    Pending: "bg-tertiary",
    Approved: "bg-emerald-500",
    Rejected: "bg-error",
}

export const mockApprovals = [
    { id: "a1", name: "NexGen Analytics", initial: "N", tone: "bg-primary/15 text-primary", founder: "Sarah Jenkins", industry: "AI & ML", tier: "Tier 1", documents: 4, submitted: "Oct 24, 2023", status: "Pending" },
    { id: "a2", name: "FlowState", initial: "F", tone: "bg-tertiary-fixed text-on-tertiary-fixed", founder: "Marcus Thorne", industry: "SaaS", tier: "Tier 2", documents: 3, submitted: "Oct 22, 2023", status: "Pending" },
    { id: "a3", name: "BlueBridge Logistics", initial: "B", tone: "bg-primary/15 text-primary", founder: "David Chen", industry: "Logistics", tier: "Tier 1", documents: 5, submitted: "Oct 20, 2023", status: "Pending" },
    { id: "a4", name: "Kryptos Security", initial: "K", tone: "bg-primary/15 text-primary", founder: "Mateus Chen", industry: "AI & ML", tier: "Tier 2", documents: 2, submitted: "Oct 18, 2023", status: "Approved" },
    { id: "a5", name: "Orbit Logix", initial: "O", tone: "bg-tertiary-fixed text-on-tertiary-fixed", founder: "Jordan Smythe", industry: "SaaS", tier: "Tier 3", documents: 1, submitted: "Oct 17, 2023", status: "Rejected" },
    { id: "a6", name: "BioSense Labs", initial: "B", tone: "bg-primary/15 text-primary", founder: "Priya Nandakumar", industry: "HealthTech", tier: "Tier 1", documents: 6, submitted: "Oct 15, 2023", status: "Approved" },
    { id: "a7", name: "QuantumStream", initial: "Q", tone: "bg-primary/15 text-primary", founder: "Alex Rivera", industry: "FinTech", tier: "Tier 1", documents: 5, submitted: "Oct 12, 2023", status: "Pending" },
    { id: "a8", name: "UrbanGrid", initial: "U", tone: "bg-tertiary-fixed text-on-tertiary-fixed", founder: "Sarah J. Mittal", industry: "SaaS", tier: "Tier 2", documents: 3, submitted: "Oct 09, 2023", status: "Approved" },
]