import { useNavigate } from "react-router"
import { MdSearch, MdNotificationsNone, MdHistory, MdHelpOutline } from "react-icons/md"

const defaultIcons = [
    { icon: MdNotificationsNone },
    { icon: MdHistory },
    { icon: MdHelpOutline },
]

const Topbar = ({ placeholder, navTabs, icons = defaultIcons, user }) => {

    const navigate = useNavigate()

    return (
        <header className="py-3 flex items-center gap-6 px-6 border-b border-outline-variant bg-surface sticky top-0 z-10">
            <div className="flex-1 relative max-w-md">
                <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
                <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg text-body-sm font-body-md focus:outline-none focus:border-primary transition-colors duration-150"
                />
            </div>

            {navTabs && (
                <nav className="hidden md:flex items-center gap-6">
                    {navTabs.map((tab) => (
                        <button
                            key={tab.label}
                            onClick={() => tab.path && navigate(tab.path)}
                            className={`font-body-sm text-body-sm pb-1 border-b-2 transition-colors duration-150 ${tab.active
                                ? "text-primary font-bold border-primary"
                                : "text-on-surface-variant border-transparent hover:text-primary"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            )}

            <div className="flex items-center gap-4 ml-auto">
                {icons.map(({ icon: Icon, badge }, i) => (
                    <button key={i} className="relative w-10 h-10 rounded-full center text-on-surface-variant hover:bg-surface-container-low transition-colors duration-150">
                        <Icon size={20} />
                        {badge && <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error" />}
                    </button>
                ))}

                <div className="flex items-center gap-3 pl-4 border-l border-outline-variant">
                    <div className="text-right">
                        <p className="font-body-sm text-body-sm font-bold text-on-surface leading-none">{user.name}</p>
                        <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wide mt-1">{user.role}</p>
                    </div>
                    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                </div>
            </div>
        </header>
    )
}

export default Topbar