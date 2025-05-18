//this is your mysql code 
// const mysql=require("mysql2");
// const pool=mysql.createPool({
//     host:"localhost",
//     user:"root",
//     password:"W7301@jair#",
//     database:"airbab",
// });
// module.exports=pool.promise();


// const mongo = require("mongodb");
// const MongoClient = mongo.MongoClient;

// // Encode the password to handle special characters
// const encodedPassword = encodeURIComponent("nooralam@2004");
// const MONGO_URL = `mongodb+srv://nooralam2004:${encodedPassword}@mern-stack.niusuhn.mongodb.net/?retryWrites=true&w=majority&appName=MERN-STACK`;

// const mongoConnect = (callback) => {
//     MongoClient.connect(MONGO_URL)
//     .then(client => {
//        // console.log('Connected to MongoDB!');
//         callback(client);
//     }).catch(err => {
//         console.log('Error while connecting to Mongo', err);
//     });
// }

// module.exports = mongoConnect;


// utils/database.js
// const  {MongoClient}  = require('mongodb');

// let _db;

// const mongoConnect = (callback) => {
// const encodedPassword = encodeURIComponent("nooralam@2004");
// const MONGO_URL = `mongodb+srv://nooralam2004:${encodedPassword}@mern-stack.niusuhn.mongodb.net/?retryWrites=true&w=majority&appName=MERN-STACK`;
//   MongoClient.connect(MONGO_URL) // Replace with your connection string
//     .then(client => {
//       console.log('Connected to MongoDB');
//       _db = client.db();
//       callback(); // ✅ call the callback correctly
//     })
//     .catch(err => {
//       console.log('Error while connecting to Mongo', err);
//       throw err;
//     });
// };
// module.exports=mongoConnect;


// const mongo = require('mongodb');

// const MongoClient = mongo.MongoClient;




// let _db;

// const mongoConnect = (callback) => {
// const encodedPassword = encodeURIComponent("nooralam@2004");
// const MONGO_URL = `mongodb+srv://nooralam2004:${encodedPassword}@mern-stack.niusuhn.mongodb.net/?retryWrites=true&w=majority&appName=MERN-STACK`;
//   MongoClient.connect(MONGO_URL)
//   .then(client => {
//     callback();
//     _db = client.db('airbnb');
//   }).catch(err => {
//     console.log('Error while connecting to Mongo: ', err);
//   });
// }

// const getDB = () => {
//   if (!_db) {
//     throw new Error('Mongo not connected');
//   }
//   return _db;
// }

// exports.mongoConnect = mongoConnect;
// exports.getDB = getDB;

// const { MongoClient } = require('mongodb');

// let _db;

// const mongoConnect = (callback) => {
// const encodedPassword = encodeURIComponent("nooralam@2004");
// // const MONGO_URL= `mongodb+srv://nooralam2004:${encodedPassword}@mern-stack.niusuhn.mongodb.net/?retryWrites=true&w=majority&appName=MERN-STACK`;
// const mongoConnect=  "mongodb+srv://nooralam1342004:nooralam@2004@mern-stack.fldnit1.mongodb.net/?retryWrites=true&w=majority&appName=MERN-STACK"
//   MongoClient.connect(MONGO_URL)
//     .then(client => {
//       console.log('Connected to MongoDB');
//       _db = client.db();
//       callback();
//     })
//     .catch(err => {
//       console.log('Error while connecting to Mongo', err);
//       throw err;
//     });
// };

// const getDb = () => {
//   if (_db) return _db;
//   throw 'No database found!';
// };

// module.exports=mongoConnect;




const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://nooralam1342004:<nooralam@2004>@mern-stack.fldnit1.mongodb.net/MERN-STACK?retryWrites=true&w=majority&appName=MERN-STACK"

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
  .then(client => {
    callback();
    _db = client.db('airbnb');
  }).catch(err => {
    console.log('Error while connecting to Mongo: ', err);
  });
}

const getDB = () => {
  if (!_db) {
    throw new Error('Mongo not connected');
  }
  return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;