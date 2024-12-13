import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Bayerische Motoren Werke
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          href="https://www.bmw.com/en/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit 
        </a>
      </header>
    </div>
  );
}

export default App;
