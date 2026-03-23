
const TodoItem = (props) => {

    const { item } = props;

    return(
        <div className="todoitem-show">
            <input type="checkbox" checked={item.completed} />
            <p>{item.text}</p>
            <button>Delete</button>
        </div>
    )
}
export default TodoItem;