export const industryFilters = ["All", "AI & ML", "FinTech", "HealthTech", "SaaS", "Logistics"]

export const statusFilters = ["All Statuses", "Active", "Pending Review", "Suspended", "Rejected"]

export const statusDotTone = {
    Active: "bg-emerald-500",
    "Pending Review": "bg-tertiary",
    Suspended: "bg-error",
    Rejected: "bg-outline-variant",
}

export const mockStartups = [
    { id: "s1", name: "NexGen Analytics", initial: "N", tone: "bg-primary/15 text-primary", founder: "Sarah Jenkins", industry: "AI & ML", stage: "Series A", fundingRaised: "$4.1M", status: "Pending Review", joined: "2024-10-24" },
    { id: "s2", name: "FlowState", initial: "F", tone: "bg-tertiary-fixed text-on-tertiary-fixed", founder: "Marcus Thorne", industry: "SaaS", stage: "Seed", fundingRaised: "$1.2M", status: "Active", joined: "2024-02-19" },
    { id: "s3", name: "BlueBridge Logistics", initial: "B", tone: "bg-primary/15 text-primary", founder: "David Chen", industry: "Logistics", stage: "Series B", fundingRaised: "$12.6M", status: "Suspended", joined: "2023-09-14" },
    { id: "s4", name: "QuantumStream", initial: "Q", tone: "bg-primary/15 text-primary", founder: "Alex Rivera", industry: "FinTech", stage: "Series A", fundingRaised: "$5.2M", status: "Active", joined: "2024-03-12" },
    { id: "s5", name: "BioSense Labs", initial: "B", tone: "bg-tertiary-fixed text-on-tertiary-fixed", founder: "Priya Nandakumar", industry: "HealthTech", stage: "Series A", fundingRaised: "$4.0M", status: "Active", joined: "2024-05-30" },
    { id: "s6", name: "Kryptos Security", initial: "K", tone: "bg-primary/15 text-primary", founder: "Mateus Chen", industry: "AI & ML", stage: "Seed", fundingRaised: "$3.4M", status: "Pending Review", joined: "2024-11-18" },
    { id: "s7", name: "UrbanGrid", initial: "U", tone: "bg-tertiary-fixed text-on-tertiary-fixed", founder: "Sarah J. Mittal", industry: "SaaS", stage: "Series B+", fundingRaised: "$8.0M", status: "Active", joined: "2024-08-22" },
    { id: "s8", name: "Orbit Logix", initial: "O", tone: "bg-primary/15 text-primary", founder: "Jordan Smythe", industry: "SaaS", stage: "Series A", fundingRaised: "$6.0M", status: "Rejected", joined: "2024-06-01" },
]