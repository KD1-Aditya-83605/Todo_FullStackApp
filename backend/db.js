//creating schemes

/*{
    Todo{
        title:string,
        des :sting,
        completed:bool
    }

}*/

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:qmzHNfWimhJtuT7z@cluster0.2avpzqz.mongodb.net/todoApp")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);


module.exports = {
    todo:todo
}