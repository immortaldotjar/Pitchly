import { motion } from "motion/react"
import { MdArrowBack } from "react-icons/md"
import Input from "../Input"
import Select from "../Select"
import Button from "../Button"
import { useSignup } from "../../context/SignupContext"

const industries = ["SaaS", "AI", "FinTech", "HealthTech", "GreenTech", "EdTech", "Other"]
const stages = ["Idea", "Pre-Seed", "Seed", "Series A", "Series B+"]
const teamSizes = ["1–5", "6–15", "16–50", "51–200", "200+"]

const StartupDetailsForm = () => {

    const { startupData, updateStartupData, submitSignup, prevStep } = useSignup()

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
        >
            <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
                <MdArrowBack size={16} /> Back
            </button>

            <h1 className="font-headline-lg font-bold text-3xl">Tell us about your startup</h1>
            <p className="font-body-md text-on-surface-variant">Help investors and mentors understand what you're building.</p>

            <div>
                <Input
                    label="Startup Name *"
                    id="startupName"
                    placeholder="Orbit Systems"
                    value={startupData.startupName}
                    onChange={(e) => updateStartupData({ startupName: e.target.value })}
                />

                <Select
                    label="Industry *"
                    id="industry"
                    placeholder="Select industry"
                    options={industries}
                    value={startupData.industry}
                    onChange={(e) => updateStartupData({ industry: e.target.value })}
                />

                <Select
                    label="Startup Stage *"
                    id="stage"
                    placeholder="Select stage"
                    options={stages}
                    value={startupData.stage}
                    onChange={(e) => updateStartupData({ stage: e.target.value })}
                />

                <Select
                    label="Team Size"
                    id="teamSize"
                    placeholder="Select team size"
                    options={teamSizes}
                    value={startupData.teamSize}
                    onChange={(e) => updateStartupData({ teamSize: e.target.value })}
                />
            </div>

            <Button variant="primary" children="Create Account" className="w-full" onClick={submitSignup} />
        </motion.div>
    )
}

export default StartupDetailsForm