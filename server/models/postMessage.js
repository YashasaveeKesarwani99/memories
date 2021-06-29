import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
})

//building mondogb 
const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;