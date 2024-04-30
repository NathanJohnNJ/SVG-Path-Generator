import './App.css';
import Toolbar from './components/toolbar';
import Draw from './components/draw';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <div>
        <Draw />
      </div>
    </div>
  );
}

export default App;
