import React, { useEffect, useState } from "react";


function Cart() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
      console.log(todos[1])
  }, []);

  return (
    <>
      <div className="main">
        <div className="left">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <button variant="contained" onClick={decrement}>
              --
            </button>
            <h1>{count}</h1>
            <button variant="contained" onClick={increment}>
             ++
            </button>
          </div>
        </div>
        <div className="right">
          <div className="todoList">
            <h1 style={{textAlign:"center"}}>TODO LIST</h1>
            <ul>
              { <h1>Loading...</h1>}
              {todos.length > 1 &&
                todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;