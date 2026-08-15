import { MdShield, MdBlock, MdStarOutline, MdArrowForward } from "react-icons/md"

const actions = [
    { icon: MdShield, title: "Verify Startup", description: "Conduct full due diligence on a pending platform startup.", cta: "Get Started", tone: "bg-primary/5 text-primary" },
    { icon: MdBlock, title: "Suspend User", description: "Temporarily restrict access for users violating terms of service.", cta: "Open Tool", tone: "bg-error-container/40 text-error" },
    { icon: MdStarOutline, title: "Feature Startup", description: "Promote a high-performing startup to the homepage carousel.", cta: "Curate List", tone: "bg-error-container/40 text-error" },
]

const QuickActions = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {actions.map((action) => (
                <div key={action.title} className={`rounded-2xl p-6 space-y-4 ${action.tone}`}>
                    <div className="w-10 h-10 rounded-full bg-surface center">
                        <action.icon size={20} />
                    </div>
                    <div>
                        <h4 className="font-headline-md text-body-md font-bold text-on-surface">{action.title}</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{action.description}</p>
                    </div>
                    <button className="flex items-center gap-1.5 font-body-sm text-body-sm font-bold">
                        {action.cta} <MdArrowForward size={16} />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default QuickActions