import { useState } from "react";
import './ChartContainer.css';
import Chart from "../Chart/Chart";
import TermButtons from "../TermButtons/TermButtons";

const ChartContainer = ({ title = 'APPL', terms }) => {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    return (
        <div className="container">
            {!!terms && <TermButtons terms={terms} onPressTerms={index => setCurrentIndex(index)} />}
            <Chart title={title} index={currentIndex}/>
        </div>
    );
}

export default ChartContainer;