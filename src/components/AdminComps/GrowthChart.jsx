import { Chart, HistogramSeries, LineSeries } from "lightweight-charts-react-components"

const months = ["2024-01-01", "2024-02-01", "2024-03-01", "2024-04-01", "2024-05-01", "2024-06-01", "2024-07-01", "2024-08-01", "2024-09-01", "2024-10-01", "2024-11-01"]

const usersValues = [30, 34, 38, 42, 48, 55, 62, 58, 82, 78, 92]
const startupsValues = [22, 25, 28, 32, 36, 42, 48, 52, 60, 66, 70]

const usersData = usersValues.map((value, i) => ({
    time: months[i],
    value,
    color: i >= 8 ? "#003f87" : "rgba(0, 63, 135, 0.25)",
}))

const startupsData = startupsValues.map((value, i) => ({
    time: months[i],
    value,
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
            return date.toLocaleDateString("en-US", { month: "short" }).toUpperCase()
        },
    },
    crosshair: {
        vertLine: { visible: false },
        horzLine: { visible: false },
    },
    handleScroll: false,
    handleScale: false,
}

const GrowthChart = () => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h4 className="font-headline-md text-body-lg font-bold text-on-surface">User & Startup Growth</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Year-over-year ecosystem expansion</p>
                </div>

                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 font-body-sm text-[11px] text-on-surface-variant">
                        <span className="w-2 h-2 rounded-full bg-primary" /> Users
                    </span>
                    <span className="flex items-center gap-1.5 font-body-sm text-[11px] text-on-surface-variant">
                        <span className="w-2 h-2 rounded-full bg-primary/30" /> Startups
                    </span>
                </div>
            </div>

            <div className="h-56">
                <Chart options={chartOptions} containerProps={{ style: { width: "100%", height: "100%" } }}>
                    <HistogramSeries data={usersData} options={{ priceLineVisible: false, lastValueVisible: false }} />
                    <LineSeries
                        data={startupsData}
                        options={{
                            color: "#acc7ff",
                            lineWidth: 2,
                            priceLineVisible: false,
                            lastValueVisible: false,
                            crosshairMarkerVisible: false,
                        }}
                    />
                </Chart>
            </div>
        </div>
    )
}

export default GrowthChart