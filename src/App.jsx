import logo from './logo.svg';
import './App.scss';
import Employees from "./components/Employees/Employees"

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  
        <Employees />
      </header>
    
    </div>
    </>
  );
}

export default App;
