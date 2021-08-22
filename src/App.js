import './App.css';
import LondonClock from './components/LondonClock';
import MalaysiaClock from './components/MalaysiaClock';
import NewYorkClock from './components/NewYorkClock';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row pt-5 text-center">
          <h1>Clock PoC</h1>
          <div className="col-3 offset-2">
            <LondonClock />
          </div>
          <div className="col-3">
            <NewYorkClock />
          </div>
          <div className="col-3">
            <MalaysiaClock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
