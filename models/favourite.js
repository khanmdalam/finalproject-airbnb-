// Core Modules
// const fs = require("fs");
// const path = require("path");
// const rootDir = require("../utils/pathUtil");

// const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

// module.exports = class Favourite {

//   static addToFavourite(homeId, callback) {
//     Favourite.getFavourites((favourites) => {
//       if (favourites.includes(homeId)) {
//         callback("Home is already marked favourite");
//       } else {
//         favourites.push(homeId);
//         fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
//       }
//     });
//   }

//   static getFavourites(callback) {
//     fs.readFile(favouriteDataPath, (err, data) => {
//       callback(!err ? JSON.parse(data) : []);
//     });
//   }

//   static deleteById(delHomeId, callback) {
//     Favourite.getFavourites(homeIds => {
//       homeIds = homeIds.filter(homeId => delHomeId !== homeId);
//       fs.writeFile(favouriteDataPath, JSON.stringify(homeIds),callback);
//     })
//   }
// };


//mongoDB wala code hai 

const { getDB } = require("../utils/database");

module.exports = class Favourite {
  constructor(houseId) {
    this.houseId = houseId;
  }

  save() {
    const db = getDB();
    return db.collection('favourites').findOne({houseId: this.houseId}).then(existingFav => {
      if (!existingFav) {
        return db.collection('favourites').insertOne(this);
      }
      return Promise.resolve();
    })
  }

  static getFavourites() {
    const db = getDB();
    return db.collection('favourites').find().toArray();
  }

  static deleteById(delHomeId) {
    const db = getDB();
    return db.collection('favourites').deleteOne({houseId: delHomeId});
  }
};