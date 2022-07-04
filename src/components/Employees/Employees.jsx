import React, { useContext } from "react";
import "./Employees.scss";
import Counter from "../Counter/Counter";
import { AddItem } from "../AddItem/AddItem";
import ListItem from "../ListItem/ListItem";
import { useState } from "react";
import { DataList } from "../../MyContext";
import { CounterContext } from "../../MyContext";
import ToDoList from "../ToDoList/ToDoList";
import Form from "../Form/Form";

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
