import './App.css';
import TodoList from './components/TodoList/TodoList';
import ApiComponent from './components/ApiComponent/ApiComponent';

import { IoMdAddCircle } from "react-icons/io";

import { useState } from 'react';

const App = () => {

  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddInput = (event) =>{
    event.preventDefault();
    console.log(userInput);

    if (userInput === "") {
      alert("Add a task!!")
    }else{
      setTodoList([
        ...todoList,
        {id:Date.now(), text: userInput, completed: false }
      ])
      setUserInput(""); 
    }
  }

  const handleDelete = (toDelete) => {
    const updatedtodoList = todoList.filter((item) => item.id !== toDelete );
    setTodoList(updatedtodoList);
  }

  const handleReset = () => {
    console.log("reset!")
    setTodoList([]);
  }

  const handleComplete = (id) => {
    const updatedtodoList = todoList.map((item) =>
      item.id === id ? {
        ...item,
        completed: !item.completed
      }:
      item
  );
  setTodoList(updatedtodoList);
  }

  return(
      <div className="app">
        <header className="my-todos">
          <h1 className="todo-title">My Todos</h1>
        </header>

        <section className="reset-btn">
          <button onClick={handleReset}>Reset</button>
        </section>

        <section className="todo-input">
          <form onSubmit={handleAddInput}>
          <input 
            type="text" 
            placeholder="Add your tasks here..." 
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />        
          <button type="submit" className="add-btn">
            <IoMdAddCircle />
          </button>
          </form>
        </section>

        <section className="todo-list" >
          <TodoList todoList={todoList} handleDelete={handleDelete} handleComplete={handleComplete}/>
        </section>

        <section className="todo-item">        
        </section>

        <section className="api-component">
          <ApiComponent />
        </section>

        
      </div>
  )
}
export default App;
