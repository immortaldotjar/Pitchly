const statusDot = {
    Active: "bg-emerald-500",
    Away: "bg-outline-variant",
    Suspended: "bg-error",
    Pending: "bg-tertiary",
}

const UserStatusBadge = ({ status }) => {
    return (
        <span className="flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
            <span className={`w-2 h-2 rounded-full ${statusDot[status] ?? "bg-outline-variant"}`} /> {status}
        </span>
    )
}

export default UserStatusBadge