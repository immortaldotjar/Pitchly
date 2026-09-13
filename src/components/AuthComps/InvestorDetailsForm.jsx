import { motion } from "motion/react"
import { MdArrowBack } from "react-icons/md"
import Input from "../Input"
import Select from "../Select"
import ChipMultiSelect from "../ChipMultiSelect"
import Button from "../Button"
import { useSignup } from "../../context/SignupContext"

const industries = ["SaaS", "AI", "FinTech", "HealthTech", "GreenTech", "EdTech", "Other"]
const stages = ["Pre-Seed", "Seed", "Series A", "Series B+", "Growth"]
const ranges = ["₹1L – ₹5L", "₹5L – ₹50L", "₹50L – ₹2Cr", "₹2Cr – ₹10Cr", "₹10Cr+"]

const InvestorDetailsForm = () => {

    const { investorData, updateInvestorData, toggleIndustry, submitSignup, prevStep } = useSignup()

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

            <h1 className="font-headline-lg font-bold text-3xl">Tell us about your investment focus</h1>
            <p className="font-body-md text-on-surface-variant">Help us match you with the right startups.</p>

            <div>
                <Input
                    label="Investor / Firm Name *"
                    id="investorName"
                    placeholder="V-Ventures"
                    value={investorData.investorName}
                    onChange={(e) => updateInvestorData({ investorName: e.target.value })}
                />

                <ChipMultiSelect
                    label="Investment Focus *"
                    options={industries}
                    selected={investorData.industries}
                    onToggle={toggleIndustry}
                />

                <Select
                    label="Investment Stage *"
                    id="stage"
                    placeholder="Select stage"
                    options={stages}
                    value={investorData.stage}
                    onChange={(e) => updateInvestorData({ stage: e.target.value })}
                />

                <Select
                    label="Typical Investment Range"
                    id="investmentRange"
                    placeholder="Select range"
                    options={ranges}
                    value={investorData.investmentRange}
                    onChange={(e) => updateInvestorData({ investmentRange: e.target.value })}
                />
            </div>

            <Button variant="primary" children="Create Account" className="w-full" onClick={submitSignup} />
        </motion.div>
    )
}

export default InvestorDetailsForm