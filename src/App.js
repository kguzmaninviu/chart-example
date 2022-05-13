import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChartContainer from './components/ChartContainer/ChartContainer';
import Home from './components/Home';
import { TERMS } from './constants/commons';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/chart' element={<ChartContainer terms={TERMS} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
