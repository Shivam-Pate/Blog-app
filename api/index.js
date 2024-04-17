import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import userRoute from './Routes/userroute.js';
import authRoute from './Routes/authroute.js';

dotenv.config();



mongoose.connect(process.env.MONGO_URL)
.then(() => {console.log('mongodb is connected')})
.catch(err => {console.log('error in connection of database')})
const app = express();

app.use(express.json());

app.listen(3000 , () =>{
    console.log('server is listening on port 3000');
})

app.use('/api/user',userRoute)

app.use('/api/auth',authRoute)