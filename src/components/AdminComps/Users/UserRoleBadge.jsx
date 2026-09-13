const roleTone = {
    Founder: "bg-tertiary-fixed text-on-tertiary-fixed",
    Investor: "bg-primary/10 text-primary",
    Admin: "bg-inverse-surface text-inverse-on-surface",
}

const UserRoleBadge = ({ role }) => {
    return (
        <span className={`px-2.5 py-1 rounded-full font-body-sm text-[11px] font-semibold ${roleTone[role] ?? "bg-surface-container-low text-on-surface-variant"}`}>
            {role}
        </span>
    )
}

export default UserRoleBadge