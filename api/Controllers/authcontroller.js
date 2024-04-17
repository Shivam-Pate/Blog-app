import user from "../Models/User.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res, ) => {
    const {username , email , password} = req.body;


    if(!username || !email || !password || username === '' || email === '' || password === ''){
       return res.status(400).json({message : "All fields are required"})
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
       res.status(500).json({message : error.message})
    }

   
}