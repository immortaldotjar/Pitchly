import { Chart, AreaSeries } from "lightweight-charts-react-components"
import { revenueTrend } from "../../../config/adminReportsConfig"

const revenueData = revenueTrend.months.map((month, i) => ({
    time: month,
    value: revenueTrend.values[i],
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

const RevenueTrendChart = () => {
    return (
        <div className="bg-surface border border-outline-variant rounded-2xl p-6 lg:col-span-2">
            <div className="mb-6">
                <h4 className="font-headline-md text-body-lg font-bold text-on-surface">Platform Revenue Trend</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Monthly recurring revenue, in thousands ($K)</p>
            </div>

            <div className="h-56">
                <Chart options={chartOptions} containerProps={{ style: { width: "100%", height: "100%" } }}>
                    <AreaSeries
                        data={revenueData}
                        options={{
                            lineColor: "#003f87",
                            topColor: "rgba(0, 63, 135, 0.25)",
                            bottomColor: "rgba(0, 63, 135, 0.02)",
                            lineWidth: 2,
                            priceLineVisible: false,
                            lastValueVisible: false,
                        }}
                    />
                </Chart>
            </div>
        </div>
    )
}

export default RevenueTrendChart