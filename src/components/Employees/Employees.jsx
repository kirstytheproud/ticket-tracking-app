import React from 'react'
import "./Employees.scss";
import Counter from '../Counter/Counter';
// import Counter from "../Counter/Counter"


// − Pass data into them via props
// deploy the live site

const Employees = ({employeeName, role}) => {


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