import './App.css';
import Chart from './components/Chart/Chart';

function App() {
  return (
    <div className="App">
      <h1>Charting Example</h1>
      <Chart />

      <Chart title='MELI' />
    </div>
  );
}

export default App;
