const SlideMock = ({ slide }) => {

    if (slide.type === "cover") {
        return (
            <div className="w-full aspect-video bg-[#0a1128] rounded-2xl center flex-col gap-2 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full text-primary/20" viewBox="0 0 800 450" preserveAspectRatio="none" fill="none">
                    <path d="M0,225 C150,150 300,300 450,225 C600,150 700,270 800,200" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M0,260 C150,190 300,330 450,260 C600,190 700,300 800,235" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <h2 className="relative font-headline-lg text-headline-lg text-white">{slide.title}</h2>
                <p className="relative font-body-sm text-body-sm text-white/60">{slide.subtitle}</p>
            </div>
        )
    }

    if (slide.type === "bullets") {
        return (
            <div className="w-full aspect-video bg-surface border border-outline-variant rounded-2xl p-10 flex flex-col justify-center gap-6">
                <h3 className="font-headline-md text-headline-md text-on-surface">{slide.title}</h3>
                <ul className="space-y-3">
                    {slide.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span className="font-body-md text-body-md text-on-surface-variant">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div className="w-full aspect-video bg-surface border border-outline-variant rounded-2xl center flex-col gap-2">
            <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest">{slide.title}</p>
            <p className="font-numeric-data text-5xl font-bold text-on-surface">{slide.metric}</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{slide.metricLabel}</p>
        </div>
    )
}

export default SlideMock;