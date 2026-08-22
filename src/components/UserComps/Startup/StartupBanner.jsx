import { MdEdit, MdLocationOn, MdSavings, MdPeople } from "react-icons/md"

const StartupBanner = ({ name, logo, tagline, stage, location, fundingGoal, employees }) => {
    return (
        <div>
            <div className="relative h-56 rounded-2xl overflow-hidden bg-[#0a1128]">
                <svg className="w-full h-full text-primary/30" viewBox="0 0 800 200" preserveAspectRatio="none" fill="none">
                    <path d="M0,100 C100,60 200,140 300,100 C400,60 500,140 600,100 C700,60 750,120 800,90" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M0,120 C100,80 200,160 300,120 C400,80 500,160 600,120 C700,80 750,140 800,110" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M0,80 C100,40 200,120 300,80 C400,40 500,120 600,80 C700,40 750,100 800,70" stroke="currentColor" strokeWidth="1.5" />
                </svg>

                <button className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-black/40 backdrop-blur text-white font-body-sm text-[12px] font-semibold">
                    <MdEdit size={14} /> Change Banner
                </button>
            </div>

            <div className="flex flex-wrap items-end gap-5 -mt-10 ml-6 relative">
                <img
                    src={logo}
                    alt={name}
                    className="w-24 h-24 rounded-2xl object-cover border-4 border-background bg-surface"
                />

                <div className="pb-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <h1 className="font-headline-lg text-headline-lg text-on-surface">{name}</h1>
                        <span className="px-2.5 py-1 rounded-full bg-primary/10 font-label-caps text-[10px] font-bold text-primary uppercase tracking-wide">
                            {tagline}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-caps text-[10px] font-bold uppercase tracking-wide">
                            {stage}
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-2 font-body-sm text-body-sm text-on-surface-variant">
                        <span className="flex items-center gap-1"><MdLocationOn size={16} /> {location}</span>
                        <span className="flex items-center gap-1"><MdSavings size={16} /> {fundingGoal}</span>
                        <span className="flex items-center gap-1"><MdPeople size={16} /> {employees}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartupBanner