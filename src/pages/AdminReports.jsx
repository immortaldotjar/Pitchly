import { useState } from "react"
import { MdFileDownload, MdPayments, MdTrendingUp, MdGroup, MdTrendingDown } from "react-icons/md"
import StatCard from "../components/StatCard"
import RevenueTrendChart from "../components/AdminComps/Reports/RevenueTrendChart"
import FundingByIndustry from "../components/AdminComps/Reports/FundingByIndustry"
import ConversionFunnel from "../components/AdminComps/Reports/ConversionFunnel"
import GeneratedReportsList from "../components/AdminComps/Reports/GeneratedReportsList"
import { generatedReports } from "../config/adminReportsConfig"

const rangeOptions = ["Last 30 Days", "90 Days", "This Year"]

const stats = [
    { icon: MdPayments, label: "Total Revenue (MRR)", value: "$196K", trend: "+10.1% MoM" },
    { icon: MdTrendingUp, label: "Platform Growth", value: "+18.4%", trend: "vs last quarter" },
    { icon: MdGroup, label: "Active Subscriptions", value: "1,842", trend: "+64 this month" },
    { icon: MdTrendingDown, label: "Churn Rate", value: "2.1%", badge: "Watch", badgeTone: "action" },
]

const AdminReports = () => {

    const [range, setRange] = useState(rangeOptions[0])

    const handleExport = () => console.log("export full report")
    const handleDownloadReport = (id) => console.log("download report", id)

    return (
        <>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface">Reports</h1>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Platform revenue, growth, and conversion insights.</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center bg-surface-container-low border border-outline-variant rounded-lg p-1">
                        {rangeOptions.map((option) => (
                            <button
                                key={option}
                                onClick={() => setRange(option)}
                                className={`px-3 py-1.5 rounded-md font-body-sm text-[12px] transition-colors duration-150 ${range === option
                                    ? "bg-surface font-bold text-on-surface shadow-sm"
                                    : "font-semibold text-on-surface-variant"
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handleExport}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary font-body-sm text-[13px] font-bold"
                    >
                        <MdFileDownload size={16} /> Export Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <RevenueTrendChart />
                <FundingByIndustry />
            </div>

            <ConversionFunnel />

            <GeneratedReportsList reports={generatedReports} onDownload={handleDownloadReport} />
        </>
    )
}

export default AdminReports