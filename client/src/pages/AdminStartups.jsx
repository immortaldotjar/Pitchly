import { useState, useMemo, useEffect } from "react"
import { MdFileDownload, MdVisibility, MdBlock, MdCheckCircleOutline, MdCancel, MdRocketLaunch, MdVerifiedUser } from "react-icons/md"
import StatCard from "../components/StatCard"
import TableToolbar from "../components/AdminComps/TableToolbar"
import BulkActionBar from "../components/AdminComps/BulkActionBar"
import DataTable from "../components/AdminComps/DataTable"
import StatusBadge from "../components/AdminComps/StatusBadge"
import ActionsMenu from "../components/AdminComps/ActionsMenu"
import Pagination from "../components/AdminComps/Pagination"
import { mockStartups, industryFilters, statusFilters, statusDotTone } from "../config/adminStartupsConfig"

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

    const columns = [
        {
            key: "startup",
            label: "Startup",
            render: (startup) => (
                <div className="flex items-center gap-3">
                    <span className={`w-9 h-9 rounded-lg center font-bold text-body-sm shrink-0 ${startup.tone}`}>{startup.initial}</span>
                    <div>
                        <p className="font-body-sm text-body-sm font-bold text-on-surface">{startup.name}</p>
                        <p className="font-body-sm text-[11px] text-on-surface-variant">{startup.founder}</p>
                    </div>
                </div>
            ),
        },
        {
            key: "industry",
            label: "Industry",
            render: (startup) => (
                <span className="px-2.5 py-1 rounded-full bg-surface-container-low font-body-sm text-[11px] font-semibold text-on-surface-variant">
                    {startup.industry}
                </span>
            ),
        },
        { key: "stage", label: "Stage", render: (startup) => <span className="font-body-sm text-body-sm text-on-surface-variant">{startup.stage}</span> },
        { key: "funding", label: "Funding Raised", render: (startup) => <span className="font-numeric-data text-body-sm text-on-surface">{startup.fundingRaised}</span> },
        { key: "status", label: "Status", render: (startup) => <StatusBadge status={startup.status} dotTone={statusDotTone} /> },
    ]

    const stats = [
        { icon: MdRocketLaunch, label: "Total Startups", value: startups.length },
        { icon: MdCheckCircleOutline, label: "Active", value: startups.filter((startup) => startup.status === "Active").length },
        { icon: MdVerifiedUser, label: "Pending Review", value: startups.filter((startup) => startup.status === "Pending Review").length, badge: startups.filter((startup) => startup.status === "Pending Review").length > 0 ? "Needs Action" : null, badgeTone: "action" },
        { icon: MdBlock, label: "Suspended", value: startups.filter((startup) => startup.status === "Suspended").length, badge: startups.filter((startup) => startup.status === "Suspended").length > 0 ? "Critical" : null, badgeTone: "critical" },
    ]

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
            </div>

            <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden">
                <TableToolbar
                    search={search}
                    onSearchChange={setSearch}
                    searchPlaceholder="Search by startup or founder..."
                    pillOptions={industryFilters}
                    activePill={activeIndustry}
                    onPillChange={setActiveIndustry}
                    statusOptions={statusFilters}
                    status={status}
                    onStatusChange={setStatus}
                />

                {selectedIds.length > 0 && (
                    <BulkActionBar
                        count={selectedIds.length}
                        onClear={() => setSelectedIds([])}
                        actions={[
                            { label: "Suspend", icon: MdBlock, onClick: () => { setStartups((prev) => prev.map((startup) => selectedIds.includes(startup.id) ? { ...startup, status: "Suspended" } : startup)); setSelectedIds([]) } },
                            { label: "Reject", icon: MdCancel, danger: true, onClick: () => { setStartups((prev) => prev.map((startup) => selectedIds.includes(startup.id) ? { ...startup, status: "Rejected" } : startup)); setSelectedIds([]) } },
                        ]}
                    />
                )}

                <DataTable
                    columns={columns}
                    rows={visibleStartups}
                    selectedIds={selectedIds}
                    onToggleSelect={handleToggleSelect}
                    onToggleSelectAll={handleToggleSelectAll}
                    emptyLabel="No startups match your search or filters."
                    renderActions={(startup) => (
                        <ActionsMenu
                            actions={[
                                { label: "View Profile", icon: MdVisibility, onClick: () => console.log("view startup", startup.id) },
                                { label: "Approve Startup", icon: MdCheckCircleOutline, tone: "primary", visible: startup.status === "Pending Review", onClick: () => handleApprove(startup.id) },
                                { label: startup.status === "Suspended" ? "Reactivate" : "Suspend", icon: startup.status === "Suspended" ? MdCheckCircleOutline : MdBlock, visible: startup.status !== "Pending Review", onClick: () => handleToggleSuspend(startup.id) },
                                { label: "Reject / Remove", icon: MdCancel, danger: true, onClick: () => handleReject(startup.id) },
                            ]}
                        />
                    )}
                />

                <Pagination
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