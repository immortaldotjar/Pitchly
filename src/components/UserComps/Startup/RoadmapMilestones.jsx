const RoadmapMilestones = ({ roadmap }) => {
    return (
        <div>
            <h3 className="font-headline-md text-body-lg font-bold text-primary mb-6">Roadmap & Milestones</h3>

            <div className="relative">
                <div className="absolute left-1.5 top-2 bottom-2 w-px bg-outline-variant" />

                <div className="space-y-8">
                    {roadmap.map((item) => (
                        <div key={item.title} className="relative pl-8">
                            <span className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${item.active ? "bg-primary border-primary" : "bg-surface border-outline-variant"
                                }`} />

                            <p className="font-label-caps text-[11px] text-primary uppercase tracking-wide">
                                {item.period}{item.tag ? ` [${item.tag}]` : ""}
                            </p>
                            <h4 className="font-body-md text-body-md font-bold text-on-surface mt-0.5">{item.title}</h4>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RoadmapMilestones