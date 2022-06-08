import mongoose from "mongoose";
import postMessage from "../models/postMessage.js";

export const getPosts=async (req,res)=>{
    try{
      const postMessages=await postMessage.find();
      // console.log(postMessages);
      res.status(200).json(postMessages);
    } catch(error){
  res.status(404).json({message:error.message})
    }
};

export const createPost=async (req,res)=>{
       const post=req.body;
       const newPost=new postMessage(post);

       try{
           await newPost.save();
       } catch(error){
        res.status(404).json({message:error.message})
       }
    res.send('creating a post');
}
export const updatePost=async (req,res)=>{
       const {id}=req.params;
       const { title, message, creator, selectedFile, tags } = req.body;
  
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No object with such id ');
        const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
           
        await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });
        res.status(200).json(updatedPost);
}