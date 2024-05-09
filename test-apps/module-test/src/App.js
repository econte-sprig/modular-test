import logo from './logo.svg';
import './App.css';
import { MouseLogger } from '@econte-sprig/mouse-logger';
import { KeyLogger } from '@econte-sprig/key-logger';
import { attachLoggers, ModuleRegistry } from '@econte-sprig/core';
ModuleRegistry.RegisterModules(KeyLogger, MouseLogger);

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
