const zod = require('zod')

const createTodo = zod.object({
    title: zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

{/* <button onClick={()=>{
    fetch('http://localhost:3000/completed',{
        method:'PUT',
        body:JSON.stringify({
            id:todo._id
        }),
        headers:{
            'content-type':'application/json'
        }
    }).then(async(res)=>{
        alert('Todo Completed')
    })
    
}}>{todo.completed == true ? "Completed":"Mark As Completed"}</button>   */}


/*
{
    title:string,
    des :string
}
{
    id:string // to mark as complete
}
*/

module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo
}

