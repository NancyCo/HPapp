import logo from './logo.svg';
import './App.css';
import Nombre from './components/nombre/Nombre';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nombre
        name={"Dario"}
        />
        <Nombre
        name={"Angel"}
        />
        <Nombre
        name={"Nancy"}
        />
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
