import { useRef, useState } from "react"
import { MdCloudUpload } from "react-icons/md"
import { acceptedFileTypes } from "../../../config/pitchDeckConfig"

const UploadZone = ({ onFileSelected, uploading }) => {

    const inputRef = useRef(null)
    const [dragActive, setDragActive] = useState(false)

    const handleFiles = (files) => {
        if (files && files[0]) onFileSelected(files[0])
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setDragActive(false)
        handleFiles(e.dataTransfer.files)
    }

    return (
        <div
            onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            onClick={() => !uploading && inputRef.current?.click()}
            className={`flex flex-col items-center justify-center text-center gap-3 border-2 border-dashed rounded-2xl py-16 px-6 cursor-pointer transition-colors duration-150 ${dragActive ? "border-primary bg-primary/5" : "border-outline-variant hover:border-primary"
                }`}
        >
            <input
                ref={inputRef}
                type="file"
                accept={acceptedFileTypes}
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
            />

            <span className="w-14 h-14 rounded-full bg-primary/10 text-primary center">
                <MdCloudUpload size={26} />
            </span>

            {uploading ? (
                <>
                    <p className="font-body-md text-body-md font-bold text-on-surface">Processing your deck...</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Converting slides for preview.</p>
                </>
            ) : (
                <>
                    <p className="font-body-md text-body-md font-bold text-on-surface">Drag & drop your pitch deck here</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">or click to browse • .pptx, .pdf, .key supported</p>
                </>
            )}
        </div>
    )
}

export default UploadZone