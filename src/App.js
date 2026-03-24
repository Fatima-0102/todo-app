import './App.css';
import TodoList from './components/TodoList/TodoList';
//import TodoItem from './components/TodoItem/TodoItem'
import { IoAddCircleOutline } from "react-icons/io5";

import { useState } from 'react';

const App = () => {

  const [userInput, SetUserInput] = useState("");
  const [todoList, SetTodoList] = useState([]);

  const handleAddInput = (event) =>{
    event.preventDefault();
    console.log(userInput);

    if (userInput === "") {
      alert("Add a task!!")
    }else{
      SetTodoList([
        ...todoList,
        {id:Date.now(), text: userInput, completed: false }
      ])
      SetUserInput(""); 
    }
  }

  const handleDelete = (toDelete) => {
    const updatedtodoList = todoList.filter((item) => item.id !== toDelete );
    SetTodoList(updatedtodoList);
  }

  const handleReset = () => {
    console.log("reset!")
    SetTodoList([]);
  }

  const handleComplete = (id) => {
    const updatedtodoList = todoList.map((item) =>
      item.id === id ? {
        ...item,
        completed: !item.completed
      }:
      item
  );
  SetTodoList(updatedtodoList);
  }

  return(
      <div className="app">
        <header className="my-todos">
          <h1 className="todo-title">My Todos</h1>
        </header>

        <section className="todo-input">
          <form onSubmit={handleAddInput}>
          <input 
            type="text" 
            placeholder="Add your tasks here..." 
            value={userInput}
            onChange={(event) => SetUserInput(event.target.value)}
          />        
          <button type="submit" className="add-btn">
            <IoAddCircleOutline />
          </button>
          </form>
        </section>

        <section className="todo-list" >
          <TodoList todoList={todoList} handleDelete={handleDelete} handleComplete={handleComplete}/>
        </section>

        <section className="todo-item">
          
        </section>

        <section className="reset-btn">
          <button onClick={handleReset}>Reset</button>
        </section>
      </div>
  )
}
export default App;
