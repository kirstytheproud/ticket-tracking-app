import React from 'react'
import teamArr from '../../data/team';
import "./Employees.scss";
import Counter from '../Counter/Counter';
// import Counter from "../Counter/Counter"


// − Pass data into them via props
// deploy the live site

const Employees = ({employeeName, role}) => {

//     <div className='tracker-card'> 
//     <h2 className='employee__name'></h2>
// <h3 className='employee__role'>Role</h3>
// </div>
    
// − Map over the data file below to create the components
    // const teamJSX = teamArr.map((member) => {
    //     return <div key={"team"}> <h2>{member.name}</h2> <h3> {member.role} </h3></div>
    //   })
      

//     <h3>{employeeName}</h3>
//     <h3>{role}</h3>

//     <div className="card">
//   {teamJSX}

// </div>

    return (
        <>
    <div className="employee-card">
      <div className="employee-card__content">
        <h2 className="employee-card__heading">{employeeName}</h2>
        <p className="employee-card__text">
          {role}
        </p>
        <Counter />
      </div>
    </div>

         

</>
  );
  //need to include props for employee name
  //props for employee role 
  //render a basic card
  // can you render multiple cards at once (something += )
  // what are states? Props are used to pass data, whereas state is for managing data

}

export default Employees;