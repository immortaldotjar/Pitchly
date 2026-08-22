import { MdExpandMore } from "react-icons/md"

const LoadMoreButton = ({ onClick, loading }) => {
    return (
        <div className="flex justify-center">
            <button
                onClick={onClick}
                disabled={loading}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-outline-variant font-body-sm text-body-sm font-semibold text-on-surface disabled:opacity-50"
            >
                {loading ? "Loading..." : "Load More Results"} <MdExpandMore size={16} />
            </button>
        </div>
    )
}

export default LoadMoreButton