import { useState, useMemo, useEffect } from "react"
import { MdFileDownload } from "react-icons/md"
import StartupsStatsRow from "../components/AdminComps/Startups/StartupsStatsRow"
import StartupsToolbar from "../components/AdminComps/Startups/StartupsToolbar"
import BulkActionBar from "../components/AdminComps/Startups/BulkActionBar"
import StartupsTable from "../components/AdminComps/Startups/StartupsTable"
import StartupsPagination from "../components/AdminComps/Startups/StartupsPagination"
import { mockStartups } from "../config/adminStartupsConfig"

const PAGE_SIZE = 5

const AdminStartups = () => {

    const [startups, setStartups] = useState(mockStartups)
    const [search, setSearch] = useState("")
    const [activeIndustry, setActiveIndustry] = useState("All")
    const [status, setStatus] = useState("All Statuses")
    const [selectedIds, setSelectedIds] = useState([])
    const [page, setPage] = useState(1)

    const filteredStartups = useMemo(() => {
        return startups.filter((startup) => {
            const matchesSearch =
                startup.name.toLowerCase().includes(search.toLowerCase()) ||
                startup.founder.toLowerCase().includes(search.toLowerCase())
            const matchesIndustry = activeIndustry === "All" || startup.industry === activeIndustry
            const matchesStatus = status === "All Statuses" || startup.status === status
            return matchesSearch && matchesIndustry && matchesStatus
        })
    }, [startups, search, activeIndustry, status])

    useEffect(() => {
        setPage(1)
        setSelectedIds([])
    }, [search, activeIndustry, status])

    const pageCount = Math.ceil(filteredStartups.length / PAGE_SIZE)
    const visibleStartups = filteredStartups.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

    const handleToggleSelect = (id) => {
        setSelectedIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id])
    }

    const handleToggleSelectAll = () => {
        const visibleIds = visibleStartups.map((startup) => startup.id)
        const allSelected = visibleIds.every((id) => selectedIds.includes(id))
        setSelectedIds(allSelected ? selectedIds.filter((id) => !visibleIds.includes(id)) : [...new Set([...selectedIds, ...visibleIds])])
    }

    const handleView = (id) => console.log("view startup", id)

    const handleApprove = (id) => {
        setStartups((prev) => prev.map((startup) => startup.id === id ? { ...startup, status: "Active" } : startup))
    }

    const handleToggleSuspend = (id) => {
        setStartups((prev) => prev.map((startup) =>
            startup.id === id ? { ...startup, status: startup.status === "Suspended" ? "Active" : "Suspended" } : startup
        ))
    }

    const handleReject = (id) => {
        setStartups((prev) => prev.map((startup) => startup.id === id ? { ...startup, status: "Rejected" } : startup))
        setSelectedIds((prev) => prev.filter((item) => item !== id))
    }

    const handleSuspendSelected = () => {
        setStartups((prev) => prev.map((startup) => selectedIds.includes(startup.id) ? { ...startup, status: "Suspended" } : startup))
        setSelectedIds([])
    }

    const handleRejectSelected = () => {
        setStartups((prev) => prev.map((startup) => selectedIds.includes(startup.id) ? { ...startup, status: "Rejected" } : startup))
        setSelectedIds([])
    }

    return (
        <>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface">Startups</h1>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Track and manage every startup profile on the platform.</p>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary font-body-sm text-[13px] font-bold">
                    <MdFileDownload size={16} /> Export List
                </button>
            </div>

            <StartupsStatsRow startups={startups} />

            <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden">
                <StartupsToolbar
                    search={search}
                    onSearchChange={setSearch}
                    activeIndustry={activeIndustry}
                    onIndustryChange={setActiveIndustry}
                    status={status}
                    onStatusChange={setStatus}
                />

                {selectedIds.length > 0 && (
                    <BulkActionBar
                        count={selectedIds.length}
                        onSuspendSelected={handleSuspendSelected}
                        onRejectSelected={handleRejectSelected}
                        onClear={() => setSelectedIds([])}
                    />
                )}

                <StartupsTable
                    startups={visibleStartups}
                    selectedIds={selectedIds}
                    onToggleSelect={handleToggleSelect}
                    onToggleSelectAll={handleToggleSelectAll}
                    onView={handleView}
                    onApprove={handleApprove}
                    onToggleSuspend={handleToggleSuspend}
                    onReject={handleReject}
                />

                <StartupsPagination
                    page={page}
                    pageCount={pageCount}
                    totalCount={filteredStartups.length}
                    pageSize={PAGE_SIZE}
                    onPrev={() => setPage((p) => Math.max(1, p - 1))}
                    onNext={() => setPage((p) => Math.min(pageCount, p + 1))}
                />
            </div>
        </>
    )
}

export default AdminStartups