import logo from './logo.svg';
import './App.css';

function App() {

const name = "Swapnil";
const num = 7;

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Bayerische Motoren Werke
        </p>
        <h1>ASRS</h1>
        <ul>
          <li>Automatic Storage And Retrival System</li>
          <li>Extended Warehouse Management System</li>
          <li>Automatic Guided Vehicles</li>
          <li>Rail Guided Vehicles</li>
          <li>Mother Baby</li>
          <li>Lifter</li>
          <li>Stacker</li>
          <li>Roller Conveyor</li>
          <li>Chain Conveyor</li>
          <li>Sizzer Lift</li>
          <h2>Hello{name}</h2>
          <p>My lucky num is {num}</p>
        </ul>
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
