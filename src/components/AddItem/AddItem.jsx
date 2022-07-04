import "./AddItem.scss";
import plus from "../../assets/images/plus.png";
import { useState } from "react";
import { DataList } from "../../MyContext";
import TaskManager from "../TaskManager/TaskManager";

export const AddItem = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };


  return (
    <>
      <div className="add-item">
          <img src={plus} alt="add-item" onClick={handleClick} />
      </div>
      {showForm ? (
        <div className="add-item">
          <DataList>
            <TaskManager />
          </DataList>
        </div>
      ) : (
        <div className="add-item"></div>
      )}
    </>
  );
};
