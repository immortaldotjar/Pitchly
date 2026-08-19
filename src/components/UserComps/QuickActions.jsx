import { MdFileUpload, MdExplore, MdEditNote, MdArrowForward } from "react-icons/md"

const actions = [
    { icon: MdFileUpload, title: "Upload Pitch Deck", description: "Share your latest deck with your investor network.", cta: "Upload Now", tone: "bg-primary/5 text-primary" },
    { icon: MdExplore, title: "Browse Investors", description: "Discover vetted investors matched to your sector.", cta: "Discover", tone: "bg-primary/5 text-primary" },
    { icon: MdEditNote, title: "Edit Startup Profile", description: "Keep your traction and team details up to date.", cta: "Edit Profile", tone: "bg-primary/5 text-primary" },
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