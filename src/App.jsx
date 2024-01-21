import AppName from "./Components/AppName"; 
import AddTodo from "./Components/AddTodo";
import './App.css'

import TodoItems from "./Components/TodoItems";
// import FoodInput from "./Components/FoodInput";
import { useState } from "react";
import Welcome from "./Components/Welcome";
function App() {
  
// let textStateArr=useState("This is my food")
 let [todoList,setTodo]=useState([]);
  
 const onAdd=(addName,addDate)=>{
   let newAddedItems=[...todoList,{item:addName,Date:addDate},];
   setTodo(newAddedItems)
 }

 const onDeleteClick=(todoItemName)=>{
  let newAddedItems= todoList.filter((items)=> items.item!==todoItemName)
  setTodo(newAddedItems)
  console.log(todoItemName)
 }

  return(
    <center className="todo-container">
      <AppName/>
      <div className="item-container">
      
      <AddTodo onAdd={onAdd}/>
      {todoList.length===0 && <Welcome/>}
      <TodoItems todoList={todoList} onDeleteClick={onDeleteClick}></TodoItems>
      </div>
      
    </center>
  );
}

export default App

// const handleONchange=(event)=>{
//   if(event.key==='Enter')
//   {
//     let newFoodItem=event.target.value
//     let newItems=[...todoList,newFoodItem]
//     setTodo(newItems)
//   }
//   // console.log(event)
//   // setTextState(event.target.value)
// }


// <FoodInput handleONchange={handleONchange}/>
