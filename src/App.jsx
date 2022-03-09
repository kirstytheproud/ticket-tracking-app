import './App.scss';
import Employees from "./components/Employees/Employees"
import teamArr from './data/team';

const App = () => {
  console.log(teamArr);

  const allTeamCards = teamArr.map((member) =>  {
    return (
      <Employees
        employeeName={member.name}
        role={member.role}
      />
    );
  });

  
  return (
    <>

   <h1 className="title">Ticket Tracker</h1>
<div className='tracker__cards'>
  {allTeamCards}
    </div>
    </>
  );
}

export default App;
