
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
    },
    profilepicture : {
        type : String,
        default : 'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-il'
    },
}, {timestamps : true})


const user =mongoose.model('User',userschema)

export default user;