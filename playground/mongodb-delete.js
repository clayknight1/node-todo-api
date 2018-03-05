// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mondgodb')
    }
    console.log('Connected to Mongodb server');

   db.collection('Todos').deleteMany({text: 'walk the dog'}).then((result) => {
       console.log(result)
   });

//    db.collection('Todos').deleteOne({text: 'drink a beer'}).then((result) => {
//        console.log(result)
//    });

   db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
       console.log(result)
   });

   db.collection('Users').deleteMany({name: 'Monet'}).then((result) => {
       console.log(result)
   });

   db.collection('Users').findOneAndDelete({_id: new ObjectId('5a9afbaa9ce0a83f3d845994')}).then((result) => {
       console.log(result)
   });
    // db.close();
});