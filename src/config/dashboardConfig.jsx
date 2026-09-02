import { MdOutlineSpaceDashboard , MdGroup, MdVerifiedUser, MdBarChart, MdSettings, MdAdd, MdHelpOutline, MdLogout, MdPeople, MdFileUpload, MdNotifications } from "react-icons/md"
import { IoRocketOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa6";
import { PiPresentationChart } from "react-icons/pi";
import { RxPeople } from "react-icons/rx";
export const adminSidebarProps = {
    brandTitle: "Pitchly",
    brandSubtitle: "Admin Console",
    navItems: [
        { icon: MdOutlineSpaceDashboard , label: "Dashboard", path: "/admin" },
        { icon: MdGroup, label: "Users", path: "/admin/users" },
        { icon: IoRocketOutline, label: "Startups", path: "/admin/startups" },
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
        { icon: MdOutlineSpaceDashboard , label: "Dashboard", path: "/dashboard" },
        { icon: IoRocketOutline, label: "My Startup", path: "/dashboard/startup" },
        { icon: FaRegCompass, label: "Discover", path: "/dashboard/discover" },
        { icon: RxPeople, label: "Networking", path: "/dashboard/networking" },
        { icon: PiPresentationChart, label: "Pitch Deck", path: "/dashboard/pitch-deck" },
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