import './Chart.css';
import { createChart } from "lightweight-charts";
import { useRef, useEffect, useState } from "react";
import { testData2 } from "../../test-data";

const chartOptions = {
    width: window.width,
    height: 300,
    layout: {
        background: {
          type: 'solid',
          color: 'white',
          lineColor: 'red',
        },
        textColor: 'green',
        fontSize: 12,
        fontFamily: 'Inter',
    },
    series: {
        topColor: 'rgba(32, 226, 47, 0.56)',
        bottomColor: 'rgba(32, 226, 47, 0.04)',
        lineColor: 'red',
    },
    grid: {
        vertLines: {
          color: 'yellow',
          style: 1,
          visible: true,
        },
        horzLines: {
          color: 'yellow',
          style: 1,
          visible: true,
        },
    },
};

var darkTheme = {
	chart: {
		layout: {
			backgroundColor: '#2B2B43',
			lineColor: '#2B2B43',
			textColor: '#D9D9D9',
		},
		watermark: {
			color: 'rgba(0, 0, 0, 0)',
		},
		crosshair: {
			color: '#758696',
		},
		grid: {
			vertLines: {
				color: '#2B2B43',
			},
			horzLines: {
				color: '#363C4E',
			},
		},
	},
	series: {
			topColor: 'rgba(32, 226, 47, 0.56)',
			bottomColor: 'rgba(32, 226, 47, 0.04)',
			lineColor: 'red',
	},
};
  
const lightTheme = {
	chart: {
		layout: {
			backgroundColor: '#FFFFFF',
			lineColor: '#2B2B43',
			textColor: '#191919',
		},
		watermark: {
			color: 'rgba(0, 0, 0, 0)',
		},
		grid: {
			vertLines: {
				visible: false,
			},
			horzLines: {
				color: '#f0f3fa',
			},
		},
	},
	series: {
			topColor: 'rgba(33, 150, 243, 0.56)',
			bottomColor: 'rgba(33, 150, 243, 0.04)',
			lineColor: 'rgba(33, 150, 243, 1)',
	},
};

const themesData = {
	'1Y': darkTheme,
	'5Y': lightTheme,
};

const Chart = ({ data = testData2, title = 'APPL', index = 0, term = '1Y' }) => {
    const [ chart, setChart ] = useState(null);

    const chartRef = useRef(null);

    const createChartWith = (data, theme = 'Dark') => {
        const chart = createChart(chartRef.current, chartOptions); 
        chart.applyOptions(themesData[term].chart);

        const lineSeries = chart.addLineSeries();
        lineSeries.setData(data);
        setChart(chart)
    }

    useEffect(() => {
        createChartWith(data)
    },[])

    useEffect(() => {
        if (chart !== null) {
            chart?.remove();
            createChartWith(data)
        }
    },[data])

    return (
        <div>
          <div className='chart' id="chart-0" ref={chartRef} />
          <h2>{`${title} - ${term}`}</h2>
        </div>
    );
}

export default Chart;