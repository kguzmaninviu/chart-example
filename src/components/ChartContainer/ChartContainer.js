import { useState } from "react";
import './ChartContainer.css';
import Chart from "../Chart/Chart";

const ChartContainer = ({ title = 'APPL' }) => {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    return (
        <div className="container">
            <div className="buttonsContainer">
                <button className="button" onClick={() => setCurrentIndex(0)}>1Y</button>
                <button className="button" onClick={() => setCurrentIndex(1)}>5Y</button>
            </div>
            <Chart title={title} index={currentIndex}/>
        </div>
    );
}

export default ChartContainer;