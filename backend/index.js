//writing express boiler code
const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())
const { todo } = require('./db');


const { createTodo,updateTodo } = require('./types');



//body{
    // title:string,
    // des : string
//}

app.post('/todo', async (req,res)=>{
    const createPayload =  req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    

    if(!(parsePayload.success)){
        res.status(411).json({
            msg:"you have sent wrong inputs"
        })
        return ;
    }
    //put in mongodb
   await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed : false

    })
    res.status(200).json({
        msg:"Created todo."
    })
    
    
    

    

})

app.get('/todos',async (req,res)=>{
    const todos =  await todo.find()
    res.json({
        todos
    })
   

})

app.put('/completed',async (req,res)=>{

    const getData = req.body;
    const parseData = updateTodo.safeParse(getData);

    if(!(parseData.success)){
        res.status(411).json({
            msg:"Wrong inputs"
        })
        return 
    }

    await todo.updateOne({
        _id:req.body.id,
    },{
        completed: true,
    })

    res.json({
        msg:"Todo marked as comleted"
    })



})





app.listen(3000);