import Select from "../../Select"
import Input from "../../Input"
import { industryFilters, stageOptions } from "../../../config/discoverConfig"

const FilterSidebar = ({ filters, onChange, onReset }) => {

    const toggleIndustry = (industry) => {
        const nextIndustries = filters.industries.includes(industry)
            ? filters.industries.filter((item) => item !== industry)
            : [...filters.industries, industry]
        onChange({ ...filters, industries: nextIndustries })
    }

    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-5 sticky top-24">
            <div className="flex items-center justify-between mb-5">
                <h4 className="font-headline-md text-body-md font-bold text-on-surface">Filters</h4>
                <button onClick={onReset} className="font-body-sm text-[12px] text-primary font-semibold">Reset</button>
            </div>

            <div className="space-y-6">
                <div>
                    <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wide mb-3">Industry</p>
                    <div className="space-y-2">
                        {industryFilters.map((industry) => (
                            <label key={industry} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={filters.industries.includes(industry)}
                                    onChange={() => toggleIndustry(industry)}
                                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20"
                                />
                                <span className="font-body-sm text-body-sm text-on-surface">{industry}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wide mb-3">Stage</p>
                    <Select
                        id="stage-filter"
                        value={filters.stage}
                        onChange={(e) => onChange({ ...filters, stage: e.target.value })}
                        options={stageOptions}
                    />
                </div>

                <div>
                    <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wide mb-3">Funding Goal</p>
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={filters.fundingGoal}
                        onChange={(e) => onChange({ ...filters, fundingGoal: Number(e.target.value) })}
                        className="w-full accent-primary"
                    />
                    <div className="flex justify-between font-body-sm text-[11px] text-on-surface-variant">
                        <span>$0M</span>
                        <span>$50M</span>
                    </div>
                </div>

                <div>
                    <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wide mb-3">Location</p>
                    <Input
                        id="location-filter"
                        placeholder="Global"
                        value={filters.location}
                        onChange={(e) => onChange({ ...filters, location: e.target.value })}
                    />
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar