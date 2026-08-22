import Select from "../../Select"
import { sortOptions } from "../../../config/discoverConfig"

const DiscoverHeader = ({ sortValue, onSortChange }) => {
    return (
        <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface">Discover Startups</h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Connecting innovative founders with strategic capital.</p>
            </div>

            <div className="w-40">
                <Select
                    id="sort"
                    value={sortValue}
                    onChange={(e) => onSortChange(e.target.value)}
                    options={sortOptions}
                    placeholder="Sort by"
                />
            </div>
        </div>
    )
}

export default DiscoverHeader