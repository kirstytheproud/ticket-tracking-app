import React from "react";
import { useState, useEffect } from "react";
import { AddItem } from "./components/AddItem/AddItem";
import Employees from "./components/Employees/Employees";
import ToDoList from "./components/ToDoList/ToDoList";

// create a Context object, use its Provider component to share our data Hook with other elements
export const CounterContext = React.createContext();

export const Counters = () => {
    const [counter, setCounter] = useState(0);

    // if the program detects a change in data, output its current value
    useEffect(() => {
        console.log(counter);
    }, [counter]);

    // share data and setData hook to children of the DataList component
    return (
        <CounterContext.Provider value={[counter, setCounter]}>
                <AddItem />
                <ToDoList />
                <Employees />     
             </CounterContext.Provider>
    )
}
