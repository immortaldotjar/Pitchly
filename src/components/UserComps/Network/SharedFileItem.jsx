import { MdPictureAsPdf, MdImage } from "react-icons/md"

const fileIcon = {
    pdf: { icon: MdPictureAsPdf, tone: "bg-error-container text-error" },
    image: { icon: MdImage, tone: "bg-primary/10 text-primary" },
}

const SharedFileItem = ({ file }) => {

    const config = fileIcon[file.type] ?? fileIcon.pdf

    return (
        <button className="w-full flex items-center gap-3 text-left">
            <span className={`w-9 h-9 rounded-lg center shrink-0 ${config.tone}`}>
                <config.icon size={18} />
            </span>
            <div className="min-w-0">
                <p className="font-body-sm text-[12px] font-bold text-on-surface truncate">{file.name}</p>
                <p className="font-body-sm text-[11px] text-on-surface-variant">{file.meta}</p>
            </div>
        </button>
    )
}

export default SharedFileItem