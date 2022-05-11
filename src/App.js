import './App.css';
import { createChart } from 'lightweight-charts';
import { data_48_1Y, data_48_5Y } from './test-data';
import { useRef, useEffect } from 'react';

function App() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartRef.current, { width: window.width, height: 300 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData(data_48_5Y);
  },[])

  return (
    <div className="App">
      <h1>Charting Example</h1>
      <div id="chart-container" ref={chartRef}></div>
    </div>
  );
}

export default App;
