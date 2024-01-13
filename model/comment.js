import mongoose, { Mongoose } from "mongoose";

const schema = mongoose.Schema({

   CommentData :{
    type:String,
    required: true,
   },
   blog:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Blog',
    required: true,
   },
   CommentOwner :{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true,
   },
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

export const Comment = mongoose.model("Comment",schema);