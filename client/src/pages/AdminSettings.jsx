import { useState } from "react"
import { MdPerson, MdShield, MdManageAccounts } from "react-icons/md"
import SettingsNav from "../components/Settings/SettingsNav"
import SettingsSection from "../components/Settings/SettingsSection"
import ProfileForm from "../components/Settings/ProfileForm"
import ChangePasswordCard from "../components/Settings/ChangePasswordCard"
import TwoFactorCard from "../components/Settings/TwoFactorCard"
import ActiveSessionsCard from "../components/Settings/ActiveSessionsCard"
import DangerZoneCard from "../components/Settings/DangerZoneCard"
import { mockAdminProfile, mockAdminSessions } from "../config/adminSettingsConfig"

const tabs = [
    { id: "profile", label: "Profile", icon: MdPerson },
    { id: "security", label: "Security", icon: MdShield },
    { id: "account", label: "Account", icon: MdManageAccounts },
]

const AdminSettings = () => {

    const [activeTab, setActiveTab] = useState("profile")

    const handleSaveProfile = (form) => console.log("save admin profile", form)
    const handleUpdatePassword = (form) => console.log("update password", form)
    const handleToggle2FA = (value) => console.log("toggle 2FA", value)
    const handleRevokeSession = (id) => console.log("revoke session", id)
    const handleDeactivate = () => console.log("deactivate admin account")
    const handleDeleteAccount = () => console.log("request admin account deletion")

    return (
        <>
            <div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface">Admin Settings</h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Manage your admin profile and account security.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                <div className="lg:col-span-1">
                    <SettingsNav tabs={tabs} active={activeTab} onChange={setActiveTab} />
                </div>

                <div className="lg:col-span-3 space-y-8">
                    {activeTab === "profile" && (
                        <ProfileForm profile={mockAdminProfile} onSave={handleSaveProfile} />
                    )}

                    {activeTab === "security" && (
                        <SettingsSection icon={MdShield} title="Security & Access">
                            <div className="space-y-6">
                                <ChangePasswordCard onUpdatePassword={handleUpdatePassword} />
                                <TwoFactorCard enabled onToggle={handleToggle2FA} />
                                <ActiveSessionsCard sessions={mockAdminSessions} onRevoke={handleRevokeSession} />
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

export default AdminSettings