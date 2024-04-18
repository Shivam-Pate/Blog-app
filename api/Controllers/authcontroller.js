import user from "../Models/User.js";
import bcryptjs from 'bcryptjs'
import { errorhandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

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


export const signin = async (req, res, next) => {
    const {email ,  password} = req.body;


    if( !email || !password || email === '' || password === ''){
       next(errorhandler(400 , "All fields are required"))
    }

    try{
         const validuser = await user.findOne({email})
         if(!validuser){
             return next(errorhandler(400 , "user not found"))
         }
         const validpassword =  bcryptjs.compareSync(password , validuser.password)
         if(!validpassword){
             return next(errorhandler(400 , "password is incorrect"))
         }

         const token = jwt.sign(
           { id : validuser._id } , process.env.JWT_SECRET)

           const {password: pass , ...rest} = validuser._doc

           res.status(200).cookie('access token', token ,{
            httpOnly : true}).json(rest)
    }
    catch(error){
        next(error);
    }
}