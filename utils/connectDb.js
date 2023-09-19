const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Connected to MongoDb  successfully`);
  } catch (error) {
    console.log(`An error occured while connecting to MongoDb ${error}`);
  }
};

module.exports = connectToDb;
