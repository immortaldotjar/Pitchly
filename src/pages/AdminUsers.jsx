import { useState, useMemo, useEffect } from "react"
import { MdPersonAdd } from "react-icons/md"
import UsersStatsRow from "../components/AdminComps/Users/UsersStatsRow"
import UsersToolbar from "../components/AdminComps/Users/UsersToolbar"
import BulkActionBar from "../components/AdminComps/Users/BulkActionBar"
import UsersTable from "../components/AdminComps/Users/UsersTable"
import UsersPagination from "../components/AdminComps/Users/UsersPagination"
import { mockUsers } from "../config/adminUsersConfig"

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

    const handleView = (id) => console.log("view user", id)

    const handleToggleSuspend = (id) => {
        setUsers((prev) => prev.map((user) =>
            user.id === id ? { ...user, status: user.status === "Suspended" ? "Active" : "Suspended" } : user
        ))
    }

    const handleDelete = (id) => {
        setUsers((prev) => prev.filter((user) => user.id !== id))
        setSelectedIds((prev) => prev.filter((item) => item !== id))
    }

    const handleSuspendSelected = () => {
        setUsers((prev) => prev.map((user) => selectedIds.includes(user.id) ? { ...user, status: "Suspended" } : user))
        setSelectedIds([])
    }

    const handleDeleteSelected = () => {
        setUsers((prev) => prev.filter((user) => !selectedIds.includes(user.id)))
        setSelectedIds([])
    }

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

            <UsersStatsRow users={users} />

            <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden">
                <UsersToolbar
                    search={search}
                    onSearchChange={setSearch}
                    activeRole={activeRole}
                    onRoleChange={setActiveRole}
                    status={status}
                    onStatusChange={setStatus}
                />

                {selectedIds.length > 0 && (
                    <BulkActionBar
                        count={selectedIds.length}
                        onSuspendSelected={handleSuspendSelected}
                        onDeleteSelected={handleDeleteSelected}
                        onClear={() => setSelectedIds([])}
                    />
                )}

                <UsersTable
                    users={visibleUsers}
                    selectedIds={selectedIds}
                    onToggleSelect={handleToggleSelect}
                    onToggleSelectAll={handleToggleSelectAll}
                    onView={handleView}
                    onToggleSuspend={handleToggleSuspend}
                    onDelete={handleDelete}
                />

                <UsersPagination
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