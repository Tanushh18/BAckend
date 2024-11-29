// Approach-1 for connecting teh backend to the database servers i.e the mongodb
// import mongoose from "mongoose";
// import { DB_NAme } from "./constants";
// import express from "express";
// const app = express();
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAme}`);
//         app.on("Errror" , (error) => {
//             console.log(error);
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Listening on port ${process.env.PORT}`);
//         })

//     } catch {
//         console.log("Error");
//     }
// })()

// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import funcdb from "./db/index.js";

dotenv.config({ path: "./env" });   
funcdb();
