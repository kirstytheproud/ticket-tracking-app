import "./AddItem.scss";
import plus from "../../assets/images/plus.png";
import { useState } from "react";
import { DataList } from "../../MyContext";
import TaskManager from "../TaskManager/TaskManager";

export const AddItem = () => {
  const [showForm, setShowForm] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const renderCounter = () => {
    setCounter(counter);
  };

  return (
    <>
      <div className="add-item">
          <img src={plus} alt="add-item" onClick={handleClick} />
      </div>
      {showForm ? (
        <div className="add-item--list">
          <DataList>
            <TaskManager changeCounter={counter} />
          </DataList>
        </div>
      ) : (
        <div className="add-item"></div>
      )}
    </>
  );
};
