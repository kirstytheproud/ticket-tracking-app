import "./AddItem.scss"
import plus from "../../assets/images/plus.png"
import { useState } from "react";
import Input from "../Input/Input";
import ListItem from "../ListItem/ListItem";

export const AddItem = () => {
  const [showInput, setShowInput] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [task, setTask] = useState("");

  const handleClick = () => {
    setShowInput(!showInput);
    console.log("button clicked");
  }
 
  const handleTask = () => {
    setShowTask(!showTask);
  }
  // const handleInput = (event) => {
  //   const input = event.target.value;
  //   setTask(input);
  // }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
    const input = event.target.value;
    setTask(input);
    setShowInput(!showInput);
    setShowTask(!showTask);
    }
   }

  return (
    <>
    <div className="add-item">
        <img src={plus} alt="add-item" onClick={handleClick} />
        </div>
{showInput ? (
  <div className="add-item--list">
      <Input  
      inputAction={handleKeyPress} />
 
      </div>
) : (
  <div className="add-item">
  {/* <img src={plus} alt="add-item" onClick={handleClick} /> */}
  </div>
)}

{showTask ? (    <ListItem text={task}/> ) : 
<>
<ListItem text={task}/>  
<ListItem text={task}/> 
</>
 }

</>
  )
}
