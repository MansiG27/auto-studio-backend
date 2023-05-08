const { DB_URL, dbConnectionOptions } = require("../config/ServerConfig");

const mongoClient = require("mongodb");

const nodeMongoClient = new mongoClient.MongoClient(
  DB_URL,
  dbConnectionOptions
);

const getConnection = async () => {
  try {
    await nodeMongoClient.connect();
    // const ans = await nodeMongoClient
    //   .db("dbAutoStudio")
    //   .collection("Default")
    //   .find()
    //   .toArray();
    // console.log(ans);
    console.log("Database Connected Successfully!!");
  } catch (error) {
    console.log(error);
  }
};

// const closeconnection = async () => {
//   nodeMongoClient.close();
// };

//Create Record
const insertOne = async (collectionName, payload) => {
  let response = null;
  try {
    response = await nodeMongoClient
      .collection(collectionName)
      .insertOne(payload);
  } catch (error) {
    console.log(error);
  }
  return response;
};

const insertMany = async (collection, filter, payload) => {};

//read or Get record
const findOne = async () => {};
const find = async (filter, projection) => {};

//Update Record
const updateOne = async () => {};
const updatemany = async () => {};

//Delete Record
const deleteOne = async () => {};
const deleteMany = async () => {};

module.exports = {
  nodeMongoClient,
  getConnection,
  insertOne,
  insertMany,
  findOne,
  find,
  updateOne,
  updatemany,
  deleteOne,
  deleteMany,
};
