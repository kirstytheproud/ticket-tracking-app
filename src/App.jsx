import logo from './logo.svg';
import './App.scss';
import Employees from "./components/Employees/Employees"
import Counter from "./components/Counter/Counter"
import team from './data/team';

function App() {
  console.log(team);
  return (
    <>
   <div className='app'> 
   <h1 className="Title"> Ticket Tracker</h1>
    <div className="cards-container">
    <Employees name={team.name} role={team.role}  />  
    {/* <Counter/> */}
    </div>
    </div>
    </>
  );
}

export default App;
