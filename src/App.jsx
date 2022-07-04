import './App.scss';
import Employees from "./components/Employees/Employees"
import teamArr from './data/team';

// import { DataList } from './MyContext';
// import ToDoList from './components/ToDoList/ToDoList';
// import Form from './components/Form/Form';

const App = () => {
  // console.log(teamArr);

  const allTeamCards = teamArr.map((member) =>  {
    return (
      <Employees
        employeeName={member.name}
        role={member.role}
      />
    );
  });

  // our Form component is a child component of DataList, which means Form has access to data Hook in dataList
  // form now updates data with no issues
  return (
    <>
<div className="container">
   <h1 className="title">Ticket Tracker</h1>
  {/* <DataList>
    <Form />
    <ToDoList />
   </DataList> */}
<div className='tracker__cards'>
  {allTeamCards}
    </div>
    </div>
    </>
  );
}

export default App;
