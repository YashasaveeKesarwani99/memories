import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postsRoute from '../server/routes/posts.js'

const app = express();

dotenv.config();
app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())

app.use('/posts', postsRoute)
const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send('Hello to memories API')
})

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    app.listen(PORT, ()=>console.log('server running on port'+ PORT))
})
.catch((err)=>console.log(err))

mongoose.set('useFindAndModify', false);