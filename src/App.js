import './App.css';
import Chart from './components/Chart/Chart';

function App() {
  return (
    <div className="App">
      <h1>Charting Example</h1>
      <Chart title='1Y'/>

      <Chart title='5Y' index={1} />
    </div>
  );
}

export default App;
