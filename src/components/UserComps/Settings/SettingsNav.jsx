import { MdPerson, MdRocketLaunch, MdShield, MdManageAccounts } from "react-icons/md"

const tabs = [
    { id: "profile", label: "Profile", icon: MdPerson },
    { id: "startup", label: "Startup", icon: MdRocketLaunch },
    { id: "security", label: "Security", icon: MdShield },
    { id: "account", label: "Account", icon: MdManageAccounts },
]

const SettingsNav = ({ active, onChange }) => {
    return (
        <nav className="bg-surface border border-outline-variant rounded-2xl p-2 space-y-1 lg:sticky lg:top-24">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onChange(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-body-sm text-body-sm font-semibold transition-colors duration-150 ${active === tab.id
                        ? "bg-primary/10 text-primary"
                        : "text-on-surface-variant hover:bg-surface-container-low"
                        }`}
                >
                    <tab.icon size={18} /> {tab.label}
                </button>
            ))}
        </nav>
    )
}

export default SettingsNav