import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div className="disclaimer-banner">
        <span className="disclaimer-text">
            Disclaimer: This tool is for informational purposes only. It does not provide medical advice. Some ingredients may be approved for use in small amounts.
        </span>
      </div>
      <Home />
    </div>
  );
}

export default App;
