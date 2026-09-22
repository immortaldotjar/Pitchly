import { useState, useMemo, useEffect } from "react"
import { MdFileDownload, MdVisibility, MdBlock, MdCheckCircleOutline, MdInsights, MdVerifiedUser } from "react-icons/md"
import StatCard from "../components/StatCard"
import TableToolbar from "../components/AdminComps/TableToolbar"
import BulkActionBar from "../components/AdminComps/BulkActionBar"
import DataTable from "../components/AdminComps/DataTable"
import StatusBadge from "../components/AdminComps/StatusBadge"
import ActionsMenu from "../components/AdminComps/ActionsMenu"
import Pagination from "../components/AdminComps/Pagination"
import { getAllInvestorReq, updateInvestorStatusReq } from "../api/investorApi"

const PAGE_SIZE = 5

const stageFilters = ["All", "Pre-Seed", "Seed", "Series A", "Series B+", "Growth"]
const statusFilters = ["All Statuses", "Pending", "Verified", "Suspended"]

const statusDotTone = {
    pending: "bg-tertiary",
    verified: "bg-emerald-500",
    suspended: "bg-error",
}

const AdminInvestors = () => {

    const [investors, setInvestors] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [activeStage, setActiveStage] = useState("All")
    const [status, setStatus] = useState("All Statuses")
    const [selectedIds, setSelectedIds] = useState([])
    const [page, setPage] = useState(1)

    const loadInvestors = () => {
        setLoading(true)
        getAllInvestorReq()
            .then(({ investors }) => setInvestors(investors))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        loadInvestors()
    }, [])

    const filteredInvestors = useMemo(() => {
        return investors.filter((investor) => {
            const matchesSearch =
                investor.investorName.toLowerCase().includes(search.toLowerCase()) ||
                (investor.owner?.username ?? "").toLowerCase().includes(search.toLowerCase())
            const matchesStage = activeStage === "All" || investor.stage === activeStage
            const matchesStatus = status === "All Statuses" || investor.status === status.toLowerCase()
            return matchesSearch && matchesStage && matchesStatus
        })
    }, [investors, search, activeStage, status])

    useEffect(() => {
        setPage(1)
        setSelectedIds([])
    }, [search, activeStage, status])

    const pageCount = Math.ceil(filteredInvestors.length / PAGE_SIZE)
    const visibleInvestors = filteredInvestors.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

    const handleToggleSelect = (id) => {
        setSelectedIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id])
    }

    const handleToggleSelectAll = () => {
        const visibleIds = visibleInvestors.map((investor) => investor._id)
        const allSelected = visibleIds.every((id) => selectedIds.includes(id))
        setSelectedIds(allSelected ? selectedIds.filter((id) => !visibleIds.includes(id)) : [...new Set([...selectedIds, ...visibleIds])])
    }

    const handleVerify = async (id) => {
        await updateInvestorStatusReq(id, "verified")
        loadInvestors()
    }

    const handleToggleSuspend = async (id) => {
        const target = investors.find((investor) => investor._id === id)
        await updateInvestorStatusReq(id, target.status === "suspended" ? "verified" : "suspended")
        loadInvestors()
    }

    const handleVerifySelected = async () => {
        await Promise.all(selectedIds.map((id) => updateInvestorStatusReq(id, "verified")))
        setSelectedIds([])
        loadInvestors()
    }

    const handleSuspendSelected = async () => {
        await Promise.all(selectedIds.map((id) => updateInvestorStatusReq(id, "suspended")))
        setSelectedIds([])
        loadInvestors()
    }

    const columns = [
        {
            key: "investor",
            label: "Investor",
            render: (investor) => (
                <div>
                    <p className="font-body-sm text-body-sm font-bold text-on-surface">{investor.investorName}</p>
                    <p className="font-body-sm text-[11px] text-on-surface-variant">{investor.owner?.username}</p>
                </div>
            ),
        },
        {
            key: "industries",
            label: "Focus",
            render: (investor) => (
                <div className="flex flex-wrap gap-1">
                    {(investor.industries ?? []).slice(0, 2).map((industry) => (
                        <span key={industry} className="px-2 py-0.5 rounded-full bg-surface-container-low font-body-sm text-[11px] font-semibold text-on-surface-variant">
                            {industry}
                        </span>
                    ))}
                </div>
            ),
        },
        { key: "stage", label: "Stage", render: (investor) => <span className="font-body-sm text-body-sm text-on-surface-variant">{investor.stage}</span> },
        { key: "range", label: "Investment Range", render: (investor) => <span className="font-numeric-data text-body-sm text-on-surface">{investor.investmentRange}</span> },
        { key: "status", label: "Status", render: (investor) => <StatusBadge status={investor.status} dotTone={statusDotTone} /> },
    ]

    const stats = [
        { icon: MdInsights, label: "Total Investors", value: investors.length },
        { icon: MdCheckCircleOutline, label: "Verified", value: investors.filter((investor) => investor.status === "verified").length },
        { icon: MdVerifiedUser, label: "Pending Review", value: investors.filter((investor) => investor.status === "pending").length, badge: investors.filter((investor) => investor.status === "pending").length > 0 ? "Needs Action" : null, badgeTone: "action" },
        { icon: MdBlock, label: "Suspended", value: investors.filter((investor) => investor.status === "suspended").length, badge: investors.filter((investor) => investor.status === "suspended").length > 0 ? "Critical" : null, badgeTone: "critical" },
    ]

    return (
        <>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface">Investors</h1>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Review and manage every investor profile on the platform.</p>
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
                    searchPlaceholder="Search by investor or owner..."
                    pillOptions={stageFilters}
                    activePill={activeStage}
                    onPillChange={setActiveStage}
                    statusOptions={statusFilters}
                    status={status}
                    onStatusChange={setStatus}
                />

                {selectedIds.length > 0 && (
                    <BulkActionBar
                        count={selectedIds.length}
                        onClear={() => setSelectedIds([])}
                        actions={[
                            { label: "Verify", icon: MdCheckCircleOutline, onClick: handleVerifySelected },
                            { label: "Suspend", icon: MdBlock, danger: true, onClick: handleSuspendSelected },
                        ]}
                    />
                )}

                <DataTable
                    columns={columns}
                    rows={loading ? [] : visibleInvestors}
                    selectedIds={selectedIds}
                    onToggleSelect={handleToggleSelect}
                    onToggleSelectAll={handleToggleSelectAll}
                    emptyLabel={loading ? "Loading..." : "No investors match your search or filters."}
                    renderActions={(investor) => (
                        <ActionsMenu
                            actions={[
                                { label: "View Profile", icon: MdVisibility, onClick: () => console.log("view investor", investor._id) },
                                { label: "Verify Investor", icon: MdCheckCircleOutline, tone: "primary", visible: investor.status === "pending", onClick: () => handleVerify(investor._id) },
                                { label: investor.status === "suspended" ? "Reactivate" : "Suspend", icon: investor.status === "suspended" ? MdCheckCircleOutline : MdBlock, danger: investor.status !== "suspended", onClick: () => handleToggleSuspend(investor._id) },
                            ]}
                        />
                    )}
                />

                <Pagination
                    page={page}
                    pageCount={pageCount}
                    totalCount={filteredInvestors.length}
                    pageSize={PAGE_SIZE}
                    onPrev={() => setPage((p) => Math.max(1, p - 1))}
                    onNext={() => setPage((p) => Math.min(pageCount, p + 1))}
                />
            </div>
        </>
    )
}

export default AdminInvestors