const {ObjectId} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// 

Todo.findOneAndRemove({_id: '5aa151659fbc05fdb7103b3f'}).then((todo) => {
    
})

Todo.findByIdAndRemove('5aa151659fbc05fdb7103b3f').then((todo) => {
    console.log(todo)
})