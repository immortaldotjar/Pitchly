import { MdLink, MdMailOutline } from "react-icons/md"

const CoreLeadership = ({ leadership }) => {
    return (
        <div>
            <h3 className="font-headline-md text-body-lg font-bold text-primary mb-4">Core Leadership</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {leadership.map((member) => (
                    <div key={member.name} className="bg-surface border border-outline-variant rounded-2xl p-5 text-center">
                        <img src={member.avatar} alt={member.name} className="w-14 h-14 rounded-full object-cover mx-auto mb-3" />
                        <p className="font-body-sm text-body-sm font-bold text-on-surface">{member.name}</p>
                        <p className="font-body-sm text-[12px] text-primary mb-3">{member.role}</p>
                        <div className="flex items-center justify-center gap-3 text-on-surface-variant">
                            <button><MdLink size={16} /></button>
                            <button><MdMailOutline size={16} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CoreLeadership