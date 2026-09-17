import { useState } from "react"
import { MdCameraAlt } from "react-icons/md"
import Input from "../Input"
import Button from "../Button"

const ProfileForm = ({ profile, onSave }) => {

    const [form, setForm] = useState(profile)

    const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value })

    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 space-y-6">
            <div className="flex items-center gap-4">
                <img src={form.avatar} alt={form.fullName} className="w-16 h-16 rounded-full object-cover" />
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-outline-variant font-body-sm text-body-sm font-semibold text-on-surface">
                    <MdCameraAlt size={16} /> Change Photo
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Full Name" id="fullName" value={form.fullName} onChange={handleChange("fullName")} />
                <Input label="Role" id="role" value={form.role} onChange={handleChange("role")} />
                <Input label="Email" id="email" type="email" value={form.email} onChange={handleChange("email")} />
                <Input label="Phone" id="phone" value={form.phone} onChange={handleChange("phone")} />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="bio" className="font-label-caps text-label-caps text-on-surface-variant px-1">Bio</label>
                <textarea
                    id="bio"
                    rows={3}
                    value={form.bio}
                    onChange={handleChange("bio")}
                    className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-[14px] text-body-md font-body-md focus:border-primary focus:ring-0 focus:outline-none transition-all duration-150 resize-none"
                />
            </div>

            <div className="flex justify-end">
                <Button variant="primary" className="px-6 py-2.5 rounded-lg" onClick={() => onSave(form)}>
                    Save Changes
                </Button>
            </div>
        </div>
    )
}

export default ProfileForm