import { useState } from "react"
import { Link } from "react-router"
import { MdArrowForward } from "react-icons/md"
import Input from "../../Input"
import Select from "../../Select"
import Button from "../../Button"
import ToggleSwitch from "../../ToggleSwitch"
import { industryOptions } from "../../../config/settingsConfig"

const StartupSettingsForm = ({ settings, onSave }) => {

    const [form, setForm] = useState(settings)

    const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value })

    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Startup Name" id="startupName" value={form.startupName} onChange={handleChange("startupName")} />
                <Input label="Website" id="website" value={form.website} onChange={handleChange("website")} />
                <Select
                    label="Industry"
                    id="industry"
                    value={form.industry}
                    onChange={handleChange("industry")}
                    options={industryOptions}
                />
            </div>

            <div className="flex items-center justify-between border-t border-outline-variant/50 pt-5">
                <div>
                    <p className="font-body-sm text-body-sm font-bold text-on-surface">Public Profile</p>
                    <p className="font-body-sm text-[12px] text-on-surface-variant">Make your startup discoverable to investors.</p>
                </div>
                <ToggleSwitch checked={form.isPublic} onChange={(value) => setForm({ ...form, isPublic: value })} />
            </div>

            <div className="flex items-center justify-between">
                <Link to="/dashboard/startup" className="flex items-center gap-1 font-body-sm text-body-sm text-primary font-semibold">
                    Manage Full Startup Profile <MdArrowForward size={16} />
                </Link>
                <Button variant="primary" className="px-6 py-2.5 rounded-lg" onClick={() => onSave(form)}>
                    Save Changes
                </Button>
            </div>
        </div>
    )
}

export default StartupSettingsForm