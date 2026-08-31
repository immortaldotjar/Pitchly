import { MdPictureAsPdf, MdTableChart, MdDownload } from "react-icons/md"

const fileIcon = {
    pdf: { icon: MdPictureAsPdf, tone: "bg-error-container text-error" },
    csv: { icon: MdTableChart, tone: "bg-primary/10 text-primary" },
}

const GeneratedReportsList = ({ reports, onDownload }) => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Generated Reports</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Previously exported platform reports.</p>
                </div>
            </div>

            <div className="space-y-2">
                {reports.map((report) => {
                    const config = fileIcon[report.type] ?? fileIcon.pdf
                    return (
                        <div key={report.id} className="flex items-center justify-between gap-3 p-3 rounded-xl border border-outline-variant/30">
                            <div className="flex items-center gap-3 min-w-0">
                                <span className={`w-9 h-9 rounded-lg center shrink-0 ${config.tone}`}>
                                    <config.icon size={18} />
                                </span>
                                <div className="min-w-0">
                                    <p className="font-body-sm text-body-sm font-bold text-on-surface truncate">{report.name}</p>
                                    <p className="font-body-sm text-[11px] text-on-surface-variant">{report.generatedAt} • {report.size}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => onDownload(report.id)}
                                className="w-8 h-8 rounded-lg border border-outline-variant center text-on-surface-variant shrink-0"
                            >
                                <MdDownload size={16} />
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GeneratedReportsList