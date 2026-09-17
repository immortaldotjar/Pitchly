const ExecutiveOverview = ({ overview, problem, solution }) => {
    return (
        <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4">
                <h4 className="font-label-caps text-label-caps text-primary uppercase tracking-wide mb-1">Executive Overview</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{overview}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-headline-md text-body-md font-bold text-on-surface mb-2">The Problem</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{problem}</p>
                </div>
                <div>
                    <h4 className="font-headline-md text-body-md font-bold text-on-surface mb-2">The Solution</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{solution}</p>
                </div>
            </div>
        </div>
    )
}

export default ExecutiveOverview