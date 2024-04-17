import user from "../Models/User.js";
import bcryptjs from 'bcryptjs'
import { errorhandler } from "../utils/error.js";

export const signup = async (req, res,next ) => {
    const {username , email , password} = req.body;


    if(!username || !email || !password || username === '' || email === '' || password === ''){
       next(errorhandler(400 , "All fields are required"))
    }

    const hashpassword = bcryptjs.hashSync(password , 10)

    const newuser = new user({
        username,
        email ,
        password : hashpassword
    });

    try{
        await newuser.save();
        res.json('signup successfull')
    }
    catch(error){
      next(error);
    }

   
}