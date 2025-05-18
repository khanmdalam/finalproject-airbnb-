// // Core Modules
// const fs = require("fs");
// const path = require("path");
// const rootDir = require("../utils/pathUtil");
// const Favourite = require("./favourite");

// const homeDataPath = path.join(rootDir, "data", "homes.json");

// module.exports = class Home {
//   constructor(houseName, price, location, rating, photoUrl) {
//     this.houseName = houseName;
//     this.price = price;
//     this.location = location;
//     this.rating = rating;
//     this.photoUrl = photoUrl;
//   }

//   save() {
//     Home.fetchAll((registeredHomes) => {
//       if (this.id) { // edit home case
//         registeredHomes = registeredHomes.map(home => 
//           home.id === this.id ? this : home);
//       } else { // add home case
//         this.id = Math.random().toString();
//         registeredHomes.push(this);
//       }
      
//       fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
//         console.log("File Writing Concluded", error);
//       });
//     });
//   }

//   static fetchAll(callback) {
//     fs.readFile(homeDataPath, (err, data) => {
//       callback(!err ? JSON.parse(data) : []);
//     });
//   }

//   static findById(homeId, callback) {
//     this.fetchAll(homes => {
//       const homeFound = homes.find(home => home.id === homeId);
//       callback(homeFound);
//     })
//   }

//   static deleteById(homeId, callback) {
//     this.fetchAll(homes => {
//       homes = homes.filter(home => home.id !== homeId);
//       fs.writeFile(homeDataPath, JSON.stringify(homes), error => {
//         Favourite.deleteById(homeId, callback);
//       });
//     })
//   }
// };


//mongodb wala code 

// const {ObjectId}=require('mongodb');
// const {getDB}=require('../utils/database');
// const { deleteById } = require('./favourite');

// module.exports=class Home{
//   constructor(houseName,price,location,rating ,photoUrl,description,_id){
//     this.houseName=houseName;
//     this.price=price;
//     this.location=location;
//     this.rating=rating;
//     this.photoUrl=photoUrl;
//     this.description=description;


//     if(_id){
//       this._id=id;

//     }
//   }
//   save(){
//     const db=getDB();
//     if(this._id){
//       const updateFields={
//         houseName:this.houseName,
//         price:this.price,
//         location:this.location,
//         photoUrl:this.photoUrl,
//         description:this.description
//       };
//       return db.collection('homes').updateone({_id:new ObjectId(String(this._id))},{$set:updateFields});
//     }else{
//       return db.collection('homes').insertone(this);

//     }
//   }
//   static fetchAll(){
//     const db=getDB();
//     return db.collection('homes').find().toArray();

//   }
//   static findById(homeId){
//     const db=getDB();
//     return db.collection('homes');
//     find({_id: new ObjectId(String(homeId))})
//     .next();
//   }
//   static deleteById(homeId){
//     const db=getDB();
//     return db.collection('homes')
//     .deleteOne({_id: new ObjectId(String(homeId))});
//   }
// };


// mongoDB wala code 


const { ObjectId } = require('mongodb');
const { getDB } = require('../utils/database');

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, _id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    if (_id) {
      this._id = _id;
    }
  }

  save() {
    const db = getDB();
    if (this._id) { // update
      const updateFields = {
        houseName: this.houseName,
        price: this.price,
        location: this.location,
        rating: this.rating,
        photoUrl: this.photoUrl,
        description: this.description
      };

      return db.collection('homes').updateOne({_id: new ObjectId(String(this._id))}, {$set: updateFields});
    } else { // insert
      return db.collection('homes').insertOne(this);
    }
  }

  static fetchAll() {
    const db = getDB();
    return db.collection('homes').find().toArray();
  }

  static findById(homeId) {
    const db = getDB();
    return db.collection('homes')
    .find({_id: new ObjectId(String(homeId))})
    .next();
  }

  static deleteById(homeId) {
    const db = getDB();
    return db.collection('homes')
    .deleteOne({_id: new ObjectId(String(homeId))});
  }
};