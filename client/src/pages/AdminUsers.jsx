import { useState, useMemo, useEffect } from "react"
import { MdPersonAdd, MdVisibility, MdBlock, MdCheckCircleOutline, MdDeleteOutline } from "react-icons/md"
import StatCard from "../components/StatCard"
import { MdGroup, MdRocketLaunch, MdInsights } from "react-icons/md"
import TableToolbar from "../components/AdminComps/TableToolbar"
import BulkActionBar from "../components/AdminComps/BulkActionBar"
import DataTable from "../components/AdminComps/DataTable"
import StatusBadge from "../components/AdminComps/StatusBadge"
import ActionsMenu from "../components/AdminComps/ActionsMenu"
import Pagination from "../components/AdminComps/Pagination"
import { mockUsers, roleFilters, statusFilters, roleTone, statusDotTone } from "../config/adminUsersConfig"

const PAGE_SIZE = 5

const AdminUsers = () => {

    const [users, setUsers] = useState(mockUsers)
    const [search, setSearch] = useState("")
    const [activeRole, setActiveRole] = useState("All")
    const [status, setStatus] = useState("All Statuses")
    const [selectedIds, setSelectedIds] = useState([])
    const [page, setPage] = useState(1)

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            const matchesSearch =
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase())
            const matchesRole = activeRole === "All" || user.role === activeRole
            const matchesStatus = status === "All Statuses" || user.status === status
            return matchesSearch && matchesRole && matchesStatus
        })
    }, [users, search, activeRole, status])

    useEffect(() => {
        setPage(1)
        setSelectedIds([])
    }, [search, activeRole, status])

    const pageCount = Math.ceil(filteredUsers.length / PAGE_SIZE)
    const visibleUsers = filteredUsers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

    const handleToggleSelect = (id) => {
        setSelectedIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id])
    }

    const handleToggleSelectAll = () => {
        const visibleIds = visibleUsers.map((user) => user.id)
        const allSelected = visibleIds.every((id) => selectedIds.includes(id))
        setSelectedIds(allSelected ? selectedIds.filter((id) => !visibleIds.includes(id)) : [...new Set([...selectedIds, ...visibleIds])])
    }

    const handleToggleSuspend = (id) => {
        setUsers((prev) => prev.map((user) =>
            user.id === id ? { ...user, status: user.status === "Suspended" ? "Active" : "Suspended" } : user
        ))
    }

    const handleDelete = (id) => {
        setUsers((prev) => prev.filter((user) => user.id !== id))
        setSelectedIds((prev) => prev.filter((item) => item !== id))
    }

    const columns = [
        {
            key: "user",
            label: "User",
            render: (user) => (
                <div className="flex items-center gap-3">
                    <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                        <p className="font-body-sm text-body-sm font-bold text-on-surface">{user.name}</p>
                        <p className="font-body-sm text-[11px] text-on-surface-variant">{user.email}</p>
                    </div>
                </div>
            ),
        },
        {
            key: "role",
            label: "Role",
            render: (user) => (
                <span className={`px-2.5 py-1 rounded-full font-body-sm text-[11px] font-semibold ${roleTone[user.role] ?? "bg-surface-container-low text-on-surface-variant"}`}>
                    {user.role}
                </span>
            ),
        },
        { key: "status", label: "Status", render: (user) => <StatusBadge status={user.status} dotTone={statusDotTone} /> },
        { key: "startup", label: "Startup", render: (user) => <span className="font-body-sm text-body-sm text-on-surface-variant">{user.startup ?? "—"}</span> },
        { key: "lastActive", label: "Last Active", render: (user) => <span className="font-body-sm text-body-sm text-on-surface-variant">{user.lastActive}</span> },
    ]

    const stats = [
        { icon: MdGroup, label: "Total Users", value: users.length },
        { icon: MdRocketLaunch, label: "Founders", value: users.filter((user) => user.role === "Founder").length },
        { icon: MdInsights, label: "Investors", value: users.filter((user) => user.role === "Investor").length },
        { icon: MdBlock, label: "Suspended", value: users.filter((user) => user.status === "Suspended").length, badge: users.filter((user) => user.status === "Suspended").length > 0 ? "Needs Review" : null, badgeTone: "critical" },
    ]

    return (
        <>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface">Users</h1>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">View and manage every account on the platform.</p>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary font-body-sm text-[13px] font-bold">
                    <MdPersonAdd size={16} /> Invite User
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
            </div>

            <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden">
                <TableToolbar
                    search={search}
                    onSearchChange={setSearch}
                    searchPlaceholder="Search by name or email..."
                    pillOptions={roleFilters}
                    activePill={activeRole}
                    onPillChange={setActiveRole}
                    statusOptions={statusFilters}
                    status={status}
                    onStatusChange={setStatus}
                />

                {selectedIds.length > 0 && (
                    <BulkActionBar
                        count={selectedIds.length}
                        onClear={() => setSelectedIds([])}
                        actions={[
                            { label: "Suspend", icon: MdBlock, onClick: () => { setUsers((prev) => prev.map((user) => selectedIds.includes(user.id) ? { ...user, status: "Suspended" } : user)); setSelectedIds([]) } },
                            { label: "Delete", icon: MdDeleteOutline, danger: true, onClick: () => { setUsers((prev) => prev.filter((user) => !selectedIds.includes(user.id))); setSelectedIds([]) } },
                        ]}
                    />
                )}

                <DataTable
                    columns={columns}
                    rows={visibleUsers}
                    selectedIds={selectedIds}
                    onToggleSelect={handleToggleSelect}
                    onToggleSelectAll={handleToggleSelectAll}
                    emptyLabel="No users match your search or filters."
                    renderActions={(user) => (
                        <ActionsMenu
                            actions={[
                                { label: "View Profile", icon: MdVisibility, onClick: () => console.log("view user", user.id) },
                                { label: user.status === "Suspended" ? "Reactivate User" : "Suspend User", icon: user.status === "Suspended" ? MdCheckCircleOutline : MdBlock, onClick: () => handleToggleSuspend(user.id) },
                                { label: "Delete User", icon: MdDeleteOutline, danger: true, onClick: () => handleDelete(user.id) },
                            ]}
                        />
                    )}
                />

                <Pagination
                    page={page}
                    pageCount={pageCount}
                    totalCount={filteredUsers.length}
                    pageSize={PAGE_SIZE}
                    onPrev={() => setPage((p) => Math.max(1, p - 1))}
                    onNext={() => setPage((p) => Math.min(pageCount, p + 1))}
                />
            </div>
        </>
    )
}

export default AdminUsers