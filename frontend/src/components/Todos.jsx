
//todos = [
    //{
        //title :,des
    //}
//]



export function Todos({ todos, setTodos }) {
    const handleUpdate = (id) => {
      fetch('http://localhost:3000/completed', {
        method: 'PUT',
        body: JSON.stringify({ id }),
        headers: {
          'content-type': 'application/json'
        }
      })
        .then((res) => {
            setTodos((prevTodos) =>
              prevTodos.map((todo) =>
                todo._id === id ? { ...todo, completed: true } : todo
              )
            );
            alert('To Do Completed')
          } 
        )

    };
  
    return (
      <div>
        {todos.map((todo) => (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => handleUpdate(todo._id)}>
              {todo.completed ? "Completed" : "Mark As Completed"}
            </button>
          </div>
        ))}
      </div>
    );
  }