import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to mongodb database`);
  } catch (error) {
    console.log(`mongo connectivity ${error}`);
  }
};
module.exports = connectDB;
