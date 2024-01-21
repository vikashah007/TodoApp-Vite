import { MdDelete } from "react-icons/md";

function TodoItem({item,Date,onDeleteClick})
{
    return(
        <div className="container kg-row">
        <div className="row">
          <div className="col-6">
              {item}
          </div>
          <div className="col-4">
             {Date}
          </div>
          <div className="col-2">

          <button type="buttton" className="btn btn-danger kg-button"
          onClick={()=>onDeleteClick(item)}
          ><MdDelete />
          </button>
          </div>
        </div>
        </div>
    )
}

export default TodoItem; 