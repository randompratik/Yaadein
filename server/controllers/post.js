import mongoose from "mongoose";
import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();
    // console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPostMessage = new postMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

  try {
    await newPostMessage.save();
    res.status(201).json(newPostMessage );
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
  
};


export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No object with such id ');
  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });
  res.status(200).json(updatedPost);
};


export const deletePost = async (req, res) => {
  const { id } = req.params;


  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No object with such id ');
  // console.log("delete");

  await postMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully." });

};


export const likePost = async (req, res) => {
  const { id } = req.params;

       if(!req.userId) res.json({message:"Unauthencticated"})

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No object with such id ');
  // console.log("delete");

  const post = await postMessage.findById(id);

  const index=post.likes.findIndex((id)=>id===String(req.userId));
     if(index===-1){
          post.likes.push(req.userId);
     }else{
        post.likes=post.likes.filter((id) => id!=String(req.userId));
     }

  const updatedPost = await postMessage.findByIdAndUpdate(id, post, { new: true });

  res.status(200).json(updatedPost);

};  

