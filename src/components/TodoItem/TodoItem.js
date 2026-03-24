import '../TodoItem/TodoItem.css'
import { MdDelete } from "react-icons/md";

const TodoItem = (props) => {

    const { item, id, handleDelete, handleComplete } = props;

    return(
        <div className="todoitem-show">
            <input type="checkbox" checked={item.completed} onChange={ () => handleComplete(id)}/>
            <p className={item.completed ? "completed" : ""}>{item.text}</p>
            <button className="delete-btn" onClick={() => handleDelete(id)}>
                <MdDelete />
            </button>
        </div>
    )
}
export default TodoItem;