
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
function AddTodo({onAdd})
{
  const [todoName,setTodoName]=useState("");
  const [todoDate,setTodoDate]=useState("");

  const handleNameChange =(event)=>{
     setTodoName(event.target.value)
  }
  const handleDateChange =(event)=>{
    setTodoDate(event.target.value)
  }
  const handleAddButton=()=>{
    onAdd(todoName,todoDate)
    setTodoName("");
    setTodoDate("");
  }
    return(
        <div className="container kg-row">
        <div className="row">
          <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" onChange={handleNameChange} value={todoName}></input>
          </div>
          <div className="col-4">
          <input type="date" onChange={handleDateChange} value={todoDate}></input>
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-success kg-button"
          onClick={handleAddButton}
          ><IoMdAdd /></button>
          </div>
        </div>
        </div>
    )
}
export default AddTodo;