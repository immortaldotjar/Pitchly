import { motion } from "motion/react"
import { MdRocketLaunch, MdTrendingUp, MdArrowBack } from "react-icons/md"
import RoleCard from "./RoleCard"
import { useSignup } from "../../context/SignupContext"

const roles = [
    {
        key: "startup",
        icon: MdRocketLaunch,
        title: "I'm a Startup",
        description: "Build your profile, raise funding and connect with investors.",
    },
    {
        key: "investor",
        icon: MdTrendingUp,
        title: "I'm an Investor",
        description: "Discover startups and find investment opportunities.",
    },
]

const RoleSelect = () => {

    const { selectRole, prevStep } = useSignup()

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
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

            <h1 className="font-headline-lg font-bold text-3xl">How will you use Pitchly?</h1>
            <p className="font-body-md text-on-surface-variant">Choose the option that best describes you.</p>

            <div className="space-y-4 pt-2">
                {roles.map((role) => (
                    <RoleCard
                        key={role.key}
                        icon={role.icon}
                        title={role.title}
                        description={role.description}
                        onClick={() => selectRole(role.key)}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default RoleSelect