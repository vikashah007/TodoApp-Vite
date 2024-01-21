import TodoItem from "./TodoItem"

function TodoItems({todoList,onDeleteClick}){

    return(
    
        <div className="items-container">
          {todoList.map((items)=>(<TodoItem key={items.item} item={items.item} Date={items.Date} onDeleteClick={onDeleteClick}></TodoItem>))}
    
        </div>
    )
}
export default TodoItems;
