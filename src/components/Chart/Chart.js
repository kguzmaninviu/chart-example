import { createChart } from "lightweight-charts";
import { useRef, useEffect } from "react";
import { data } from "../../test-data";

const Chart = ({ title = 'APPL', index = 0 }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = createChart(chartRef.current, { width: window.width, height: 300 });
        const lineSeries = chart.addLineSeries();
        lineSeries.setData(data[index]);
    },[])

    return (
        <div>
          <h2>{title}</h2>
          <div id="chart-0" ref={chartRef} />
        </div>
    );
}

export default Chart;