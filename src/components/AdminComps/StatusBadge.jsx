const StatusBadge = ({ status, dotTone }) => {
    return (
        <span className="flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
            <span className={`w-2 h-2 rounded-full ${dotTone[status] ?? "bg-outline-variant"}`} /> {status}
        </span>
    )
}

export default StatusBadge