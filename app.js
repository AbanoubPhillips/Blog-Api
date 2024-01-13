import express from "express";
import mongoose from "mongoose";
import userRouter from "./router/user_router.js";
import blogRouter from "./router/blog_router.js";

import bodyParser from "body-parser";
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.listen(3000,()=>console.log("listen to port 3000"));

mongoose.connect("mongodb://127.0.0.1:27017/blogdb",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("database connected"))
.catch((error)=>console.log(error));

app.use("/api/users",userRouter);
app.use("/api/blogs",blogRouter);

