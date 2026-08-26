import { useState } from "react"
import { MdShield } from "react-icons/md"
import SettingsNav from "../components/UserComps/Settings/SettingsNav"
import SettingsSection from "../components/UserComps/Settings/SettingsSection"
import ProfileForm from "../components/UserComps/Settings/ProfileForm"
import StartupSettingsForm from "../components/UserComps/Settings/StartupSettingsForm"
import ChangePasswordCard from "../components/UserComps/Settings/ChangePasswordCard"
import TwoFactorCard from "../components/UserComps/Settings/TwoFactorCard"
import ActiveSessionsCard from "../components/UserComps/Settings/ActiveSessionsCard"
import DangerZoneCard from "../components/UserComps/Settings/DangerZoneCard"
import { mockProfile, mockStartupSettings, mockSessions } from "../config/settingsConfig"

const Settings = () => {

    const [activeTab, setActiveTab] = useState("profile")

    const handleSaveProfile = (form) => console.log("save profile", form)
    const handleSaveStartup = (form) => console.log("save startup settings", form)
    const handleUpdatePassword = (form) => console.log("update password", form)
    const handleToggle2FA = (value) => console.log("toggle 2FA", value)
    const handleRevokeSession = (id) => console.log("revoke session", id)
    const handleDeactivate = () => console.log("deactivate account")
    const handleDeleteAccount = () => console.log("request account deletion")

    return (
        <>
            <div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface">Account Settings</h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Manage your personal information, startup profile, and security preferences.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                <div className="lg:col-span-1">
                    <SettingsNav active={activeTab} onChange={setActiveTab} />
                </div>

                <div className="lg:col-span-3 space-y-8">
                    {activeTab === "profile" && (
                        <ProfileForm profile={mockProfile} onSave={handleSaveProfile} />
                    )}

                    {activeTab === "startup" && (
                        <StartupSettingsForm settings={mockStartupSettings} onSave={handleSaveStartup} />
                    )}

                    {activeTab === "security" && (
                        <SettingsSection icon={MdShield} title="Security & Access">
                            <div className="space-y-6">
                                <ChangePasswordCard onUpdatePassword={handleUpdatePassword} />
                                <TwoFactorCard enabled onToggle={handleToggle2FA} />
                                <ActiveSessionsCard sessions={mockSessions} onRevoke={handleRevokeSession} />
                            </div>
                        </SettingsSection>
                    )}

                    {activeTab === "account" && (
                        <DangerZoneCard onDeactivate={handleDeactivate} onDeleteAccount={handleDeleteAccount} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Settings