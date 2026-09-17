export const conversations = [
    {
        id: "marcus",
        name: "Marcus Thorne",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80",
        online: true,
        pinned: true,
        lastMessage: "Let's review the series ...",
        time: "10:45 AM",
        unreadCount: 2,
    },
    {
        id: "elena",
        name: "Elena Rossi",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
        online: false,
        pinned: true,
        lastMessage: "The deck looks great, Alex!",
        time: "Yesterday",
        unreadCount: 0,
    },
    {
        id: "jordan",
        name: "Jordan Smythe",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
        online: false,
        pinned: false,
        lastMessage: "Can we push our sync to 3...",
        time: "Mon",
        unreadCount: 0,
    },
    {
        id: "scaletech",
        name: "ScaleTech Ventures",
        initials: "ST",
        online: false,
        pinned: false,
        lastMessage: 'New invite to "Networking...',
        time: "22 Oct",
        unreadCount: 0,
    },
    {
        id: "kevin",
        name: "Kevin Zhang",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80",
        online: false,
        pinned: false,
        lastMessage: "Thanks for the feedback.",
        time: "18 Oct",
        unreadCount: 0,
    },
]

export const messagesByConversation = {
    marcus: {
        dateLabel: "Today, October 24",
        thread: [
            {
                id: 1,
                sender: "them",
                text: "Hey Alex, I've had a chance to look over the revised pitch deck. The market validation section is much stronger now.",
                time: "10:42 AM",
            },
            {
                id: 2,
                sender: "them",
                text: "Are you available for a brief sync tomorrow to discuss the equity structure? I have some thoughts on the employee pool allocation.",
                time: "10:43 AM",
            },
            {
                id: 3,
                sender: "me",
                text: "That sounds great, Marcus! Glad the market data hit the mark. I'm definitely available tomorrow morning.",
                time: "10:45 AM",
                status: "read",
            },
            {
                id: 4,
                sender: "me",
                text: "Would 10:00 AM PST work for you?",
                time: "10:45 AM",
                status: "read",
            },
        ],
    },
    elena: {
        dateLabel: "Yesterday, October 23",
        thread: [
            { id: 1, sender: "them", text: "The deck looks great, Alex!", time: "4:12 PM" },
        ],
    },
    jordan: {
        dateLabel: "Monday, October 21",
        thread: [
            { id: 1, sender: "them", text: "Can we push our sync to 3pm instead of 2?", time: "11:05 AM" },
        ],
    },
    scaletech: {
        dateLabel: "October 22",
        thread: [
            { id: 1, sender: "them", text: "New invite to \"Networking Mixer - SF\"", time: "9:00 AM" },
        ],
    },
    kevin: {
        dateLabel: "October 18",
        thread: [
            { id: 1, sender: "them", text: "Thanks for the feedback.", time: "6:30 PM" },
        ],
    },
}

export const profileByConversation = {
    marcus: {
        name: "Marcus Thorne",
        role: "Managing Director at North Star Ventures",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
        investmentFocus: { firm: "North Star Ventures", category: "Fintech • Series A/B" },
        sharedFiles: [
            { name: "Series_A_Deck_V3.pdf", meta: "4.2 MB • Oct 22", type: "pdf" },
            { name: "Market_Analysis_Chart.png", meta: "1.1 MB • Oct 21", type: "image" },
        ],
        pinnedMessages: [
            { text: "We are looking for a valuation around $15M pre-money based o...", date: "Oct 19, 2023" },
            { text: "Next sync scheduled for Oct 25th at 10:00 AM.", date: "Oct 20, 2023" },
        ],
    },
    elena: {
        name: "Elena Rossi",
        role: "Design Partner at Foundry Collective",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
        investmentFocus: { firm: "Foundry Collective", category: "SaaS • Seed" },
        sharedFiles: [],
        pinnedMessages: [],
    },
    jordan: {
        name: "Jordan Smythe",
        role: "Co-Founder at Ridgeline Labs",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
        investmentFocus: null,
        sharedFiles: [],
        pinnedMessages: [],
    },
    scaletech: {
        name: "ScaleTech Ventures",
        role: "Venture Fund",
        avatar: null,
        initials: "ST",
        investmentFocus: { firm: "ScaleTech Ventures", category: "Deep Tech • Series B+" },
        sharedFiles: [],
        pinnedMessages: [],
    },
    kevin: {
        name: "Kevin Zhang",
        role: "Angel Investor",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
        investmentFocus: null,
        sharedFiles: [],
        pinnedMessages: [],
    },
}