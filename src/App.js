import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Chart from './components/Chart/Chart';
import ChartContainer from './components/ChartContainer/ChartContainer';
import Home from './components/Home';
import { TERMS } from './constants/commons';
import { testData2 } from './test-data';
import { sleep } from './utils/utils';

function SingleChart() {
  let { ticker, term } = useParams();
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
    sleep(2000).then(() => { 
      setIsLoading(false);
      const data = testData2[term];
      setData(data);
    });
  }, []);

  return !isLoading ? (
    <div>
      {!!data && <Chart data={data} title={`Ticker ${ticker}`} term={term} />}
    </div>
  ): <p>loading</p>;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/charts/:ticker' element={<ChartContainer terms={TERMS} />} />
          <Route path="charts/:ticker&amp;term=:term" element={<SingleChart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
