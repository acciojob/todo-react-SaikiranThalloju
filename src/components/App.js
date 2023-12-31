import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(1);

  function addTodo(e) {
    e.preventDefault();
    // let lastElement = todoList[todoList.length-1] || {id : 0}
    setTodoList([...todoList, { id: id, title: todo }]);
    setTodo("");
    setId(id + 1);
  }

  function deleteTodo(deleteid){
    // let newTodoList = [];

  //   for(let t of newTodoList){
  // if(t.id != deleteid){
  //   newTodoList.push(t);
  // }
  //   }

  setTodoList(todoList.filter((item)=>item.id!== deleteid))
  }



  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter to do"
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              {item.title}
              <button onClick={()=>deleteTodo(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default App;
