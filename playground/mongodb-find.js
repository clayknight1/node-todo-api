// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mondgodb')
    }
    console.log('Connected to Mongodb server');

    // db.collection('Todos').find({
    //     _id: new ObjectId('5a9af5ac47aea43e23487aa6')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos')
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos')
    // })

    // db.close();

    db.collection('Todos').find({text: 'Boners'}).toArray()
    .then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('You made an error')
    });
});