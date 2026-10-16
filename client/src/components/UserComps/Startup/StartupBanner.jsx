import { MdEdit, MdLocationOn, MdSavings, MdPeople } from "react-icons/md"

const StartupBanner = ({ name, logo, tagline, stage, location, fundingGoal, employees }) => {
    return (
        <div>
            <div className="relative h-80 rounded-t-xl overflow-hidden bg-[url('./assets/banner.png')] bg-center bg-cover">
                

                <button className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-black/40 backdrop-blur text-white font-body-sm text-[12px] font-semibold">
                    <MdEdit size={14} /> Change Banner
                </button>
            </div>

            <div className="flex flex-wrap items-end gap-5 top-30 ml-7 absolute bg-white/20 backdrop-blur-lg p-4 rounded-xl">
                <img
                    src={logo}
                    alt={name}
                    className="w-24 h-24 rounded-xl object-cover border-4 border-white/30 bg-transparent"
                />

                <div className="pb-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <h1 className="font-headline-lg text-headline-lg text-white">{name}</h1>
                        
                        <span className="px-5 py-1 h-full rounded-full bg-white text-on-tertiary-fixed font-label-caps text-[10px] font-bold uppercase tracking-wide">
                            {stage}
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-2 font-body-sm text-body-sm text-on-secondary">
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