import { MdFileUpload, MdExplore, MdEditNote, MdArrowForward } from "react-icons/md"
import { useNavigate } from "react-router"

const actions = [
    { icon: MdFileUpload, title: "Upload Pitch Deck", description: "Share your latest deck with your investor network.", cta: "Upload Now",to : "/dashboard/pitch-deck" , tone: "bg-primary/5 text-primary" },
    { icon: MdExplore, title: "Browse Investors", description: "Discover vetted investors matched to your sector.", cta: "Discover",to : "/dashboard/discover" , tone: "bg-primary/5 text-primary" },
    { icon: MdEditNote, title: "Edit Startup Profile", description: "Keep your traction and team details up to date.", cta: "Edit Profile",to : "settings" , tone: "bg-primary/5 text-primary" },
]

const QuickActions = () => {

    const navigate = useNavigate()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {actions.map((item) => (
                <div key={item.title} className={`rounded-xl p-6 space-y-4 ${item.tone}`}>
                    <div className="w-10 h-10 rounded-full bg-surface center">
                        <item.icon size={20} />
                    </div>
                    <div>
                        <h4 className="font-headline-md text-body-md font-bold text-on-surface">{item.title}</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{item.description}</p>
                    </div>
                    <button className="flex items-center gap-1.5 font-body-sm text-body-sm font-bold" onClick={() => {navigate(item.to)}}>
                        {item.cta} <MdArrowForward size={14} />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default QuickActions