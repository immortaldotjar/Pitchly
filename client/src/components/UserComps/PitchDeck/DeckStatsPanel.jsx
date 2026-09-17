const DeckStatsPanel = ({ stats }) => {
    return (
        <div className="bg-primary text-on-primary rounded-2xl p-5">
            <h4 className="font-label-caps text-[10px] text-on-primary/60 uppercase tracking-wide mb-4">Deck Performance</h4>

            <div className="grid grid-cols-3 gap-3">
                <div>
                    <p className="font-numeric-data text-xl font-bold">{stats.views}</p>
                    <p className="font-label-caps text-[9px] text-on-primary/60 uppercase tracking-wide">Views</p>
                </div>
                <div>
                    <p className="font-numeric-data text-xl font-bold">{stats.downloads}</p>
                    <p className="font-label-caps text-[9px] text-on-primary/60 uppercase tracking-wide">Downloads</p>
                </div>
                <div>
                    <p className="font-numeric-data text-xl font-bold">{stats.avgTimePerSlide}</p>
                    <p className="font-label-caps text-[9px] text-on-primary/60 uppercase tracking-wide">Avg / Slide</p>
                </div>
            </div>
        </div>
    )
}

export default DeckStatsPanel