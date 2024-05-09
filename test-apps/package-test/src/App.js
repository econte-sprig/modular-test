import logo from './logo.svg';
import './App.css';
import attachLoggers from '@econte-sprig/modular-test';

function App() {
  return (
    <div ref={(r) => attachLoggers(r)} className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
