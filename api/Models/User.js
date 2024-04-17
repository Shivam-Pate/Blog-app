
import mongoose  from "mongoose";



const userschema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        unique : true,
    }
}, {timestamps : true})


const user =mongoose.model('User',userschema)

export default user;