import { useState } from "react"

 export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description , setDiscription] = useState("")
    return(
        <div>
            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="title" onChange={(e)=>{
                const value = e.target.value
                setTitle(value)
            }}></input> <br/>
            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="description" onChange={(e)=>{
                const des = e.target.value;
                setDiscription(des)
            }} /> <br/>

            <button style={{
                padding:10,
                margin:10,
            }}onClick={()=>{
                //axios
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }),
                    headers:{
                        "content-type" : "application/json"
                    }

                }).then(async (res)=>{
                    const  json = await res.json();
                    alert("Todo Added")

                })


            }}>Add a Todo</button>

        </div>
    )
}

