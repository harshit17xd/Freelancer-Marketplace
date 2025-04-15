import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `DB connected : hosted at -> ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error in connecting database", error);
  }
};
export default connectDB;
