import { useState } from "react"
import Input from "../Input"
import Button from "../Button"

const ChangePasswordCard = ({ onUpdatePassword }) => {

    const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" })

    const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value })

    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 space-y-4">
            <h4 className="font-headline-md text-body-md font-bold text-on-surface">Change Password</h4>

            <Input
                label="Current Password"
                id="currentPassword"
                type="password"
                placeholder="••••••••"
                value={form.currentPassword}
                onChange={handleChange("currentPassword")}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                    label="New Password"
                    id="newPassword"
                    type="password"
                    placeholder="Enter new password"
                    value={form.newPassword}
                    onChange={handleChange("newPassword")}
                />
                <Input
                    label="Confirm Password"
                    id="confirmPassword"
                    type="password"
                    placeholder="Repeat new password"
                    value={form.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                />
            </div>

            <div className="flex justify-end">
                <Button variant="primary" className="px-6 py-2.5 rounded-lg" onClick={() => onUpdatePassword(form)}>
                    Update Password
                </Button>
            </div>
        </div>
    )
}

export default ChangePasswordCard