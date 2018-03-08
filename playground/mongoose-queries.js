const {ObjectId} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var id = '5a9fe80c4fd9577e11d93eec';

// if (!ObjectId.isValid(id)) {
//     console.log('ID not valid')
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Could Not Find What You are Looking For')
//     }
//     console.log('Todo find by id', todo)
// }).catch((e) => console.log(e))

User.findById(id).then((user) => {
    if(!user) {
        return console.log('Could not find user')
    }
    console.log(user)
}).catch((e) => {
    console.log(e);
});