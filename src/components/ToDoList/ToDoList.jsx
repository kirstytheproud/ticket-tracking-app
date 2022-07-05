import "./ToDoList.scss"
import { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DataContext } from "../../MyContext";
import { useState } from "react";
import deleteIcon from "../../assets/images/icons8-delete-36.png";

const ToDoList = ({ammend}) => {
    const [data, setData] = useContext(DataContext);
    const [deleted, setDeleted] = useState(false);

    //accepts ID as parameter - this will be ID of task we want to delete, use .filter to remove selected task
   //the returned value is x.id!==product.id because if the id matches, 
   // x.id !== product.id will evaluate to false and returning false will remove the product.
    const deleteItem = (id) => {
        setData(data.filter((x) => x.id !== id))
        setDeleted(!deleted);
    };

//     Line 1: Convert the data Hook into array form.
// Line 2: Find the item that the user dragged. This is the source item.
// Line 3: Change the source item’s position to its destination.
// Line 4: In the end, pass this mutated array into the data Hook.
   const handleEnd = (result) => {
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items);
   }
   
       // The provided object contains the props for styling and lookups.
    return (
        <div className="App">
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="to-dos">
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            {data.map((item, index) => (
                                <Draggable
                                key={item.id}
                                draggableId={item.id.toString()}
                                index={index}>
                            
                            {(provided, snapshot) => (
                                <li
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                                {...provided.dragHandleProps}
                                key={item.id}
                                className={
                                    snapshot.isDragging ? "selected" : "not-selected"
                                }
                                >
                                    
                               <div className="list__text">    
                               <img className="list__text icon--delete" src={deleteIcon} alt="delete icon" onClick={() => deleteItem(item.id)} onMouseDown={ammend}/>
                               {index + 1}.  {item.name}</div> 
                            
                                
                                </li>
                            )}

                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                 </Droppable>
            </DragDropContext>
        </div>
    );
}

export default ToDoList;
