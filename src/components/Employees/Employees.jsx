import "./Employees.scss";
import { AddItem } from "../AddItem/AddItem";

// − Pass data into them via props
// deploy the live site

const Employees = ({ employeeName, role }) => {
  return (
    <>
      <div className="employee-card">
        <div className="employee-card__content">
          <h2 className="employee-card__heading">{employeeName}</h2>
          <p className="employee-card__text">{role}</p>
          {/* <p className="employee-card__text">{counter}</p> */}
          {/* <Counter /> */}
          <AddItem />
        </div>
      </div>
    </>
  );
};

export default Employees;
