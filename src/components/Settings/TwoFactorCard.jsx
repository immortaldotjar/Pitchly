import { useState } from "react"
import ToggleSwitch from "../ToggleSwitch"

const TwoFactorCard = ({ enabled, onToggle }) => {

    const [checked, setChecked] = useState(enabled)

    const handleChange = (value) => {
        setChecked(value)
        onToggle(value)
    }

    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 flex items-center justify-between gap-4">
            <div>
                <p className="font-body-sm text-body-sm font-bold text-on-surface">Two-Factor Authentication</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant">Add an extra layer of security to your Pitchly account.</p>
            </div>
            <ToggleSwitch checked={checked} onChange={handleChange} />
        </div>
    )
}

export default TwoFactorCard