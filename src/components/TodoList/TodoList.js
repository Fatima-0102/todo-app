import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
    const { todoList } = props;

    return(
        <>
        <div className="todolist-show">
            <h2>Todo List:</h2>

            {todoList.length === 0 ? (
                <p>Nothing to see here yet... Add a task in teh field above!</p>
            ): (
                todoList.map((item, index) => (
                    <TodoItem key={index} item={item} />
                ))
            )}
        </div>
        </>
    )
}
export default TodoList;