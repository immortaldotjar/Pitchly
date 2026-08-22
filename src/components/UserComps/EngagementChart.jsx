import { Chart, HistogramSeries } from "lightweight-charts-react-components"

const days = ["2024-06-03", "2024-06-04", "2024-06-05", "2024-06-06", "2024-06-07", "2024-06-08", "2024-06-09"]
const values = [40, 60, 45, 92, 38, 72, 42]

const data = values.map((value, i) => ({
    time: days[i],
    value,
    color: value > 85 ? "#003f87" : "rgba(0, 63, 135, 0.25)",
}))

const chartOptions = {
    layout: {
        background: { color: "transparent" },
        textColor: "#424752",
        fontFamily: "Inter, sans-serif",
        fontSize: 10,
    },
    grid: {
        vertLines: { visible: false },
        horzLines: { color: "#e0e3e8" },
    },
    rightPriceScale: { visible: false },
    timeScale: {
        borderVisible: false,
        tickMarkFormatter: (time) => {
            const date = typeof time === "string" ? new Date(time) : new Date(time.year, time.month - 1, time.day)
            return date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()
        },
    },
    crosshair: {
        vertLine: { visible: false },
        horzLine: { visible: false },
    },
    handleScroll: false,
    handleScale: false,
}

const EngagementChart = () => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 lg:col-span-2">
            <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Investor Engagement</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Click-through and session length this week</p>

            <div className="h-48">
                <Chart options={chartOptions} containerProps={{ style: { width: "100%", height: "100%" } }}>
                    <HistogramSeries data={data} options={{ priceLineVisible: false, lastValueVisible: false }} />
                </Chart>
            </div>
        </div>
    )
}

export default EngagementChart