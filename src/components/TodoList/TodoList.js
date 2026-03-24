import TodoItem from "../TodoItem/TodoItem";


const TodoList = (props) => {
    const { todoList, handleDelete, handleComplete } = props;

    return(        <div className="todolist-show">
            <h2>Todo List:</h2>

            {todoList.length === 0 ? (
                <p>Nothing to see here yet... Add a task in the field above!</p>
            ): (
                todoList.map((item, id) => (
                    <TodoItem 
                        key={id} 
                        item={item}
                        id={item.id}
                        //index={index}
                        handleDelete={handleDelete}
                        handleComplete={handleComplete} />
                ))
            )}
        </div>
    )
}
export default TodoList;