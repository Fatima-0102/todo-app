

const TodoList = (props) => {
    const { todoList } = props;
    return(
        <>
        <div className="todolist-show">
            <h2>Todo List:</h2>

            {props.todoList.map((item,index) => (
                <p key={index}>{item.text} </p>
            ))}
        </div>
        </>
    )
}
export default TodoList;