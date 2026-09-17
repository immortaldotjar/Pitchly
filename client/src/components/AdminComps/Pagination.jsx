import { MdChevronLeft, MdChevronRight } from "react-icons/md"

const Pagination = ({ page, pageCount, totalCount, pageSize, onPrev, onNext }) => {

    const start = totalCount === 0 ? 0 : (page - 1) * pageSize + 1
    const end = Math.min(page * pageSize, totalCount)

    return (
        <div className="flex items-center justify-between px-6 py-4 border-t border-outline-variant">
            <p className="font-body-sm text-[12px] text-on-surface-variant">
                Showing {start}–{end} of {totalCount}
            </p>

            <div className="flex items-center gap-2">
                <button
                    onClick={onPrev}
                    disabled={page === 1}
                    className="w-8 h-8 rounded-lg border border-outline-variant center text-on-surface-variant disabled:opacity-40"
                >
                    <MdChevronLeft size={16} />
                </button>
                <span className="font-body-sm text-[12px] text-on-surface-variant">Page {page} of {pageCount || 1}</span>
                <button
                    onClick={onNext}
                    disabled={page === pageCount || pageCount === 0}
                    className="w-8 h-8 rounded-lg border border-outline-variant center text-on-surface-variant disabled:opacity-40"
                >
                    <MdChevronRight size={16} />
                </button>
            </div>
        </div>
    )
}

export default Pagination