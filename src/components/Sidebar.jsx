import { motion } from "motion/react"
import { useNavigate, useLocation } from "react-router"
import Button from "./Button"

const Sidebar = ({ brandTitle, brandSubtitle, navItems, quickAction, bottomLinks = [], profile }) => {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 border-r border-outline-variant bg-surface p-6 justify-between shrink-0">
            <div className="space-y-10">
                <div className="space-y-0.5">
                    <h2 className="font-headline-md text-body-lg font-bold text-on-surface">{brandTitle}</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{brandSubtitle}</p>
                </div>

                <nav className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path
                        return (
                            <button
                                key={item.label}
                                onClick={() => navigate(item.path)}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-body-sm text-body-sm font-semibold transition-colors duration-150 relative ${isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-on-surface-variant hover:bg-surface-container-low"
                                    }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="sidebar-active"
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-full"
                                    />
                                )}
                                <item.icon size={20} />
                                {item.label}
                            </button>
                        )
                    })}
                </nav>
            </div>

            <div className="space-y-4">
                {quickAction && (
                    <Button
                        variant="primary"
                        className="w-full flex items-center justify-center gap-2 "
                        onClick={quickAction.onClick}
                    >
                        <quickAction.icon size={18} /> {quickAction.label}
                    </Button>
                )}

                {bottomLinks.length > 0 && (
                    <div className="space-y-1">
                        {bottomLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={link.onClick}
                                className="w-full flex items-center gap-3 px-4 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150"
                            >
                                <link.icon size={20} /> {link.label}
                            </button>
                        ))}
                    </div>
                )}

                {profile && (
                    <div className="flex items-center gap-3 border-t border-outline-variant pt-4">
                        <img src={profile.avatar} alt={profile.name} className="w-9 h-9 rounded-full object-cover" />
                        <div>
                            <p className="font-body-sm text-body-sm font-bold text-on-surface leading-none">{profile.name}</p>
                            <p className="font-body-sm text-[11px] text-on-surface-variant mt-1">{profile.role}</p>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    )
}

export default Sidebar