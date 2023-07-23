const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const generateToken = require("../config/generateToken")

//asyncHandler k ander wrap kar dengey taki koi bhi error ho toh nikal aaye

const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password, pic} = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please enter all the field");
    }

    const userExists = await User.findOne({email});//findone se ham check kartey hai kii user hamarey database me exist kar rha hai ya nhi

    if(userExists){
        res.status(400);
        throw new Error("User alredy exist")
    }

    const user = await User.create({
        name, email, password, pic
    })

    if(user){         //agar user success create hota hai toh
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email: user.email,
            pic : user.pic,
            token: generateToken(user._id)//we will send jwt token to client
        })
    }else{
        res.status(400);
        throw new Error("Failed to create the user")
    }
});

const authUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){ //login password ko database waley password se match karengey
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic
        })
    }else{
        console.log("User do not exist");
    }
})

module.exports = {registerUser, authUser};