import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        
      },
      blogs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Blog'
      }],

      createdAt: {
        type: Date,
        default: Date.now
      }
    
});

export const User = mongoose.model("User",schema);
