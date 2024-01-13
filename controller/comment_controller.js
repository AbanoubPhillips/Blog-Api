import {Comment} from "../model/comment"

export const createComment = async (req,res)=>{
    const data = req.body;
  try {
    const comment = new Comment(data);
    await comment.save();
    return res.status(201).json(comment);
  } catch (error) {
    return res.status(400).json(error.message);
  }
 
};

export const getallComments = async (req,res)=>{
    let comments;
    try {

        comments= await Blog.find();
        if(!comments) return res.status(404).json({"massage":"no comments added yet"});
        return res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }  
 
};

export const deleteComment = async (req,res)=>{
  const id = req.params.id;
let existcomment;
    try {
        existcomment = await Comment.findById({_id:id});
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  try{
    if(existcomment){
       await Comment.deleteOne(existcomment);
      return res.status(200).json({message:"comment deleted",existcomment});
    }
    return res.status(404).json({message:"comment not found"});
  }catch(err){
    return res.status(500).json({ error: err.message });
  }
};


export const updateComment = async (req,res)=>{
  const id = req.params.id;
  const data = req.body;
  let existcomment;
    try {
        existcomment = await Blog.findById({_id:id});
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  try{
    if(existcomment){
        await Comment.updateOne(data);
      
      return res.status(200).json({message:"comment updated successfully"});
    }
    return res.status(404).json({message:"Comment not found"});
  }catch(err){
    return res.status(500).json({ error: err.message });
  }
};