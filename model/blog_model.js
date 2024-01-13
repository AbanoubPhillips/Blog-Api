import mongoose, { Mongoose } from "mongoose";

const schema = mongoose.Schema({
   title :{
    type:String,
    required: true,
   },
   description :{
    type:String,
    required: true,
   },
   image :{
    type:String,
   
   },
   owner :{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true,
   },
   comments:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Comment"
    }
   ],
   likes:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
   ],
   createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Blog = mongoose.model("Blog",schema);