import { motion } from "motion/react"

const RoleCard = ({ icon: Icon, title, description, onClick }) => {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-start gap-4 p-5 border border-outline-variant rounded-2xl text-left hover:border-primary hover:bg-surface-container-low transition-colors duration-150"
        >
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary center shrink-0">
                <Icon size={22} />
            </div>
            <div className="space-y-1">
                <h4 className="font-headline-md text-body-md font-bold text-on-surface">{title}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{description}</p>
            </div>
        </motion.button>
    )
}

export default RoleCard