import {Blog} from "../model/blog_model"


export const createblog = async (req,res)=>{
    const data = req.body;
  try {
    const blog = new Blog(data);
    await blog.save();
    return res.status(201).json(blog);
  } catch (error) {
    return res.status(400).json(error.message);
  }
 
};

export const getallblogs = async (req,res)=>{
    let blogs;
    try {

        blogs= await Blog.find();
        if(!blogs) return res.status(404).json({"massage":"no blogs added yet"});
        return res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }  
 
};

export const deleteblog = async (req,res)=>{
  const id = req.params.id;
let existblog;
    try {
      existblog = await Blog.findById({_id:id});
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  try{
    if(existblog){
       await Blog.deleteOne(existblog);
      return res.status(200).json({message:"blog deleted",existblog});
    }
    return res.status(404).json({message:"blog not found"});
  }catch(err){
    return res.status(500).json({ error: err.message });
  }
};


export const updateblog = async (req,res)=>{
  const id = req.params.id;
  const data = req.body;
  let existblog;
    try {
      existblog = await Blog.findById({_id:id});
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  try{
    if(existblog){
        await Blog.updateOne(data);
      
      return res.status(200).json({message:"blog updated successfully"});
    }
    return res.status(404).json({message:"blog not found"});
  }catch(err){
    return res.status(500).json({ error: err.message });
  }
};