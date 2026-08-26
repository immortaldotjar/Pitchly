const SettingsSection = ({ icon: Icon, title, children }) => {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                {Icon && <Icon className="text-primary" size={20} />}
                <h3 className="font-headline-md text-body-lg font-bold text-on-surface">{title}</h3>
            </div>
            {children}
        </div>
    )
}

export default SettingsSection