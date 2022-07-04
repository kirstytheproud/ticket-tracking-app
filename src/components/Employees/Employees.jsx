import React from "react";
import "./Employees.scss";
import Counter from "../Counter/Counter";
import { AddItem } from "../AddItem/AddItem";
import ListItem from "../ListItem/ListItem";
// import Counter from "../Counter/Counter"
import { useState } from "react";
import { DataList } from "../../MyContext";
import Form from "../../Form";
import ToDoList from "../../ToDoList";

// − Pass data into them via props
// deploy the live site

const Employees = ({ employeeName, role }) => {


  return (
    <>
      <div className="employee-card">
        <div className="employee-card__content">
          <h2 className="employee-card__heading">{employeeName}</h2>
          <p className="employee-card__text">{role}</p>
          <Counter />
          <AddItem />

          <DataList>
            <Form />
            <ToDoList/>
   </DataList>
        </div>
      </div>
    </>
  );
};

export default Employees;
