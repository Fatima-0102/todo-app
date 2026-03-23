import './App.css';

import { useState } from 'react';

const App = () => {

  const [userInput, SetUserInput] = useState("");
  const [todoList, SetTodoList] = useState([]);

  const handleAddInput = (event) =>{
    event.preventDefault();
    console.log(userInput);

    if (userInput === "") {
      console.log("Add a task!!")
    }else{
      SetUserInput({
        ...SetTodoList,
        userInput,
      })
      SetUserInput(""); 
    }

  }

  return(
    <>
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
          
          <button type="submit">Add</button>
          </form>
        </section>

        <section className="todo-list">
          Todo List:
        </section>

        <section className="reset-btn">
          <button>Reset</button>
        </section>
      </div>
    
    </>
  )
}
export default App;
