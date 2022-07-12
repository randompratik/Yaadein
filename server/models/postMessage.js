import mongoose from "mongoose";
 

//Schema allows us to create a schema(layout) for database objects
const postSchema=mongoose.Schema({
    
    title: String,
    message: String,
    creator: String,
    tags:[String],
    selectedFile: String,
     likes:{
        type:[String],
        default:[]
     },
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

const postMessage=mongoose.model('postMessage',postSchema);   //a model is kindof an object and and schema is a class

export default postMessage;