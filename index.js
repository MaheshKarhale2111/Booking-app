import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
// import usersRoute from "./routes/users.js"
// import roomsRoute from "./routes/rooms.js"


const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDb");
  } catch (error) {
    throw error;
  }
};
 
mongoose.connection.on("disconnected", () =>{
  console.log("Mongodb disconnected");
}) 
mongoose.connection.on("connected", () =>{
  console.log("Mongodb connected");
})
 
// middlewares 
app.use(express.json());
// Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
app.use("/auth", authRoute) ; 
app.use("/hotels",hotelsRoute) ; 
// app.use("/users",usersRoute) ; 
// app.use("/rooms", roomsRoute) ; 





// app.get("/", (req, res) =>{
//   res.send("<h1> This is Mahesh</h1>");
// })



app.listen(2500, () => { 
  connect();
  console.log("listening on 2500");
});
