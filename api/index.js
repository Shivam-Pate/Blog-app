import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';


dotenv.config();



mongoose.connect(process.env.Mongo)
.then(() => {console.log('mongodb is connected')})
.catch(err => {console.log('error in connection of database')})
const app = express();


app.listen(3000 , () =>{
    console.log('server is listening on port 3000');
})