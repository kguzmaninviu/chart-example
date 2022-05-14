import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './ChartContainer.css';
import Chart from "../Chart/Chart";
import TermButtons from "../TermButtons/TermButtons";
import { mockedDataByTickers } from "../../test-data";
import { TERMS } from "../../constants/commons";
import { sleep } from "../../utils/utils";

const ChartContainer = ({ title = 'APPL', terms }) => {
    let { ticker } = useParams();
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ currentTerm, setCurrentTerm ] = useState(TERMS[0].id);

    const [ isLoading, setIsLoading ] = useState(true);

    const data = mockedDataByTickers[ticker][currentTerm] || null
 
    useEffect(() => {
        setIsLoading(true);
        sleep(2000).then(() => { 
          setIsLoading(false);
        });
    },[]);

    return !isLoading ? (
        <div className="container">
            {!!terms && <TermButtons terms={terms} onPressTerms={term => setCurrentTerm(term)} />}
            {!!data && <Chart data={data} title={`${title}-${ticker}`} index={currentIndex} term={currentTerm}/>}
        </div>
    ): <p>Loading chart...</p>;
}

export default ChartContainer;