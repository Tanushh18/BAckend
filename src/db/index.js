import mongoose from "mongoose";
import { DB_NAme } from "../constants.js";

const funcdb = async () => {
  try {
    const connect = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAme}`
    );
    console.log("Connected to DB");
    console.log(
      `Connected to DB with this connection instance ${connect.connection.host}`
    ); // connection instance ko pado
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default funcdb;
