import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos,setTodos] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/todos')
    .then((data)=>{
      return data.json()
       
    }).then((info)=>{
      setTodos(info.todos)
    })
   
  },[])

    return(
  <div>
    <CreateTodo> </CreateTodo>
    <Todos todos={todos} setTodos={setTodos}></Todos>
  </div>
  )
 
}

export default App
