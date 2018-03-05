// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mondgodb')
    }
    console.log('Connected to Mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'Boners',
    //     pee: false
    // }, (err, result) => {
    //     if (err) {
    //         return(console.log('Unsbale to insert todo'), err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Monet',
    //     age: 30,
    //     location: 'Oceanside'
    // }, (err, result) => {
    //     if (err) {
    //         return (console.log('Unable to add user'), err)
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});