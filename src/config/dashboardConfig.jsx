import { MdGridView, MdGroup, MdRocketLaunch, MdVerifiedUser, MdBarChart, MdSettings, MdAdd, MdHelpOutline, MdLogout, MdPeople, MdFileUpload, MdNotifications } from "react-icons/md"

export const adminSidebarProps = {
    brandTitle: "Pitchly",
    brandSubtitle: "Admin Console",
    navItems: [
        { icon: MdGridView, label: "Dashboard", path: "/admin" },
        { icon: MdGroup, label: "Users", path: "/admin/users" },
        { icon: MdRocketLaunch, label: "Startups", path: "/admin/startups" },
        { icon: MdVerifiedUser, label: "Approvals", path: "/admin/approvals" },
        { icon: MdBarChart, label: "Reports", path: "/admin/reports" },
        { icon: MdSettings, label: "Settings", path: "/admin/settings" },
    ],
    quickAction: { label: "New Analysis", icon: MdAdd, onClick: () => { } },
    bottomLinks: [
        { icon: MdHelpOutline, label: "Support" },
        { icon: MdLogout, label: "Sign Out" },
    ],
}

export const adminTopbarProps = {
    placeholder: "Search startups, founders, or investors...",
    user: { name: "Admin User", role: "Super Admin", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" },
}

export const userSidebarProps = {
    brandTitle: "Pitchly",
    brandSubtitle: "Premium Network",
    navItems: [
        { icon: MdGridView, label: "Dashboard", path: "/dashboard" },
        { icon: MdRocketLaunch, label: "My Startup", path: "/dashboard/startup" },
        { icon: MdPeople, label: "Networking", path: "/dashboard/networking" },
        { icon: MdFileUpload, label: "Pitch Deck", path: "/dashboard/pitch-deck" },
        { icon: MdSettings, label: "Settings", path: "/dashboard/settings" },
    ],
    quickAction: { label: "New Pitch", icon: MdAdd, onClick: () => { } },
    bottomLinks: [
        { icon: MdHelpOutline, label: "Help Center" },
    ],
}

export const userTopbarProps = {
    placeholder: "Search network...",
    navTabs: [{ label: "Network", active: true }, { label: "Insights" }],
    icons: [{ icon: MdNotifications, badge: true }],
    user: { name: "Alex Chen", role: "Founder @ Pitchly", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" },
}