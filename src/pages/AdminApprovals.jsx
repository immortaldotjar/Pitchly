import { useState, useMemo, useEffect } from "react"
import { MdFileDownload, MdVisibility, MdCheckCircle, MdCancel, MdReplay, MdHourglassTop, MdTaskAlt, MdDescription } from "react-icons/md"
import StatCard from "../components/StatCard"
import TableToolbar from "../components/AdminComps/TableToolbar"
import BulkActionBar from "../components/AdminComps/BulkActionBar"
import DataTable from "../components/AdminComps/DataTable"
import StatusBadge from "../components/AdminComps/StatusBadge"
import ActionsMenu from "../components/AdminComps/ActionsMenu"
import Pagination from "../components/AdminComps/Pagination"
import { mockApprovals, tierFilters, approvalStatusFilters, statusDotTone } from "../config/adminApprovalsConfig"

const PAGE_SIZE = 5

const AdminApprovals = () => {

    const [approvals, setApprovals] = useState(mockApprovals)
    const [search, setSearch] = useState("")
    const [activeTier, setActiveTier] = useState("All")
    const [status, setStatus] = useState("All Statuses")
    const [selectedIds, setSelectedIds] = useState([])
    const [page, setPage] = useState(1)

    const filteredApprovals = useMemo(() => {
        return approvals.filter((item) => {
            const matchesSearch =
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.founder.toLowerCase().includes(search.toLowerCase())
            const matchesTier = activeTier === "All" || item.tier === activeTier
            const matchesStatus = status === "All Statuses" || item.status === status
            return matchesSearch && matchesTier && matchesStatus
        })
    }, [approvals, search, activeTier, status])

    useEffect(() => {
        setPage(1)
        setSelectedIds([])
    }, [search, activeTier, status])

    const pageCount = Math.ceil(filteredApprovals.length / PAGE_SIZE)
    const visibleApprovals = filteredApprovals.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

    const handleToggleSelect = (id) => {
        setSelectedIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id])
    }

    const handleToggleSelectAll = () => {
        const visibleIds = visibleApprovals.map((item) => item.id)
        const allSelected = visibleIds.every((id) => selectedIds.includes(id))
        setSelectedIds(allSelected ? selectedIds.filter((id) => !visibleIds.includes(id)) : [...new Set([...selectedIds, ...visibleIds])])
    }

    const handleApprove = (id) => {
        setApprovals((prev) => prev.map((item) => item.id === id ? { ...item, status: "Approved" } : item))
    }

    const handleReject = (id) => {
        setApprovals((prev) => prev.map((item) => item.id === id ? { ...item, status: "Rejected" } : item))
    }

    const handleRevert = (id) => {
        setApprovals((prev) => prev.map((item) => item.id === id ? { ...item, status: "Pending" } : item))
    }

    const handleViewDocuments = (id) => console.log("view documents", id)

    const columns = [
        {
            key: "startup",
            label: "Startup",
            render: (item) => (
                <div className="flex items-center gap-3">
                    <span className={`w-9 h-9 rounded-lg center font-bold text-body-sm shrink-0 ${item.tone}`}>{item.initial}</span>
                    <div>
                        <p className="font-body-sm text-body-sm font-bold text-on-surface">{item.name}</p>
                        <p className="font-body-sm text-[11px] text-on-surface-variant">{item.founder}</p>
                    </div>
                </div>
            ),
        },
        {
            key: "industry",
            label: "Industry",
            render: (item) => (
                <span className="px-2.5 py-1 rounded-full bg-surface-container-low font-body-sm text-[11px] font-semibold text-on-surface-variant">
                    {item.industry}
                </span>
            ),
        },
        { key: "tier", label: "Tier", render: (item) => <span className="font-body-sm text-body-sm text-on-surface-variant">{item.tier}</span> },
        {
            key: "documents",
            label: "Documents",
            render: (item) => (
                <span className="flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <MdDescription size={16} /> {item.documents} Files
                </span>
            ),
        },
        { key: "submitted", label: "Submitted", render: (item) => <span className="font-body-sm text-body-sm text-on-surface-variant">{item.submitted}</span> },
        { key: "status", label: "Status", render: (item) => <StatusBadge status={item.status} dotTone={statusDotTone} /> },
    ]

    const stats = [
        { icon: MdHourglassTop, label: "Pending Review", value: approvals.filter((item) => item.status === "Pending").length, badge: approvals.filter((item) => item.status === "Pending").length > 0 ? "Action Required" : null, badgeTone: "action" },
        { icon: MdTaskAlt, label: "Approved", value: approvals.filter((item) => item.status === "Approved").length },
        { icon: MdCancel, label: "Rejected", value: approvals.filter((item) => item.status === "Rejected").length },
        { icon: MdDescription, label: "Documents Submitted", value: approvals.reduce((total, item) => total + item.documents, 0) },
    ]

    return (
        <>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface">Approvals</h1>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Review due diligence submissions and approve new startups.</p>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary font-body-sm text-[13px] font-bold">
                    <MdFileDownload size={16} /> Export Queue
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
                    pillOptions={tierFilters}
                    activePill={activeTier}
                    onPillChange={setActiveTier}
                    statusOptions={approvalStatusFilters}
                    status={status}
                    onStatusChange={setStatus}
                />

                {selectedIds.length > 0 && (
                    <BulkActionBar
                        count={selectedIds.length}
                        onClear={() => setSelectedIds([])}
                        actions={[
                            { label: "Approve", icon: MdCheckCircle, onClick: () => { setApprovals((prev) => prev.map((item) => selectedIds.includes(item.id) ? { ...item, status: "Approved" } : item)); setSelectedIds([]) } },
                            { label: "Reject", icon: MdCancel, danger: true, onClick: () => { setApprovals((prev) => prev.map((item) => selectedIds.includes(item.id) ? { ...item, status: "Rejected" } : item)); setSelectedIds([]) } },
                        ]}
                    />
                )}

                <DataTable
                    columns={columns}
                    rows={visibleApprovals}
                    selectedIds={selectedIds}
                    onToggleSelect={handleToggleSelect}
                    onToggleSelectAll={handleToggleSelectAll}
                    emptyLabel="No submissions match your search or filters."
                    renderActions={(item) => (
                        item.status === "Pending" ? (
                            <div className="flex items-center justify-end gap-2">
                                <button
                                    onClick={() => handleApprove(item.id)}
                                    className="px-4 py-1.5 rounded-lg bg-primary text-on-primary font-body-sm text-[11px] font-bold"
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={() => handleReject(item.id)}
                                    className="px-4 py-1.5 rounded-lg bg-error-container text-error font-body-sm text-[11px] font-bold"
                                >
                                    Reject
                                </button>
                            </div>
                        ) : (
                            <ActionsMenu
                                actions={[
                                    { label: "View Documents", icon: MdVisibility, onClick: () => handleViewDocuments(item.id) },
                                    { label: "Revert to Pending", icon: MdReplay, onClick: () => handleRevert(item.id) },
                                ]}
                            />
                        )
                    )}
                />

                <Pagination
                    page={page}
                    pageCount={pageCount}
                    totalCount={filteredApprovals.length}
                    pageSize={PAGE_SIZE}
                    onPrev={() => setPage((p) => Math.max(1, p - 1))}
                    onNext={() => setPage((p) => Math.min(pageCount, p + 1))}
                />
            </div>
        </>
    )
}

export default AdminApprovals