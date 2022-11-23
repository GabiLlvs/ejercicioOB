import logo from './logo.svg';
import './App.css';
import ComponenteLista from './components/container/componente_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteLista></ComponenteLista>
      </header>
    </div>
  );
}

export default App;
