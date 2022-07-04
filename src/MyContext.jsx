import React from "react";
import { useState, useEffect } from "react";

// create a Context object, use its Provider component to share our data Hook with other elements
export const DataContext = React.createContext([]);

export const DataList = (props) => {
    const [data, setData] = useState([]);

    // if the program detects a change in data, output its current value
    useEffect(() => {
        console.log(data);
    }, [data]);

    // share data and setData hook to children of the DataList component
    return (
        <DataContext.Provider value ={[data, setData]}>
            {props.children}
        </DataContext.Provider>
    )
}
