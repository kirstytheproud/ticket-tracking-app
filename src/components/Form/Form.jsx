import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../../MyContext";
import { nanoid } from "nanoid";
import "./Form.scss";

const Form = ({addTask}) => {
    // retrieve the data and setData hook from MyContext.jsx
    const [data, setData] = useContext(DataContext);
    const { register, handleSubmit } = useForm();

    //add new item to data array whilst capturing value of the name field
    const onSubmit = (input) => {
        const id = nanoid();
        // Constructing array literal with spread operator
        setData([...data, { id, name: input.name}]);
    }

    /* assign onSubmit as handler to the form */
    // input text field will capture user intput for the name property
    
    return (
        <div className="input">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input type="text" placeholder="Add a task..." {...register("name")} />
                </label>
                <button onClick={addTask}>+</button>
            </form>
        </div>
    )
}

export default Form;