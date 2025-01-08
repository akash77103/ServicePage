const User=require('../models/user-model')
const bcrypt=require("bcrypt")
const home=async(req,res)=>{
    try{
        res
        .status(200)
        .send("Hello controller")
    }
    catch(error){
        console.log(error)
    }
}
const register= async (req,res)=>{
    try{
        const {username,email,password,phone}=req.body
        const userExist= await User.findOne({email})
        if(userExist){
            return res.status(400).json({message:"email already exist"})
        }
const userCreated= await User.create({username,email,password,phone})
        console.log(req.body)
        res.status(201).json({
        msg:"register successfull",
        token:await userCreated.generateToken(),
        userId:userCreated._id.toString()
    })
    } 
    catch(error){
        res.status(400).send({msg:"page not found"})
    }
}

//User login
const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const userExist=await User.findOne({email})
        console.log(userExist)
        if(!userExist){
            return res.status(400).json({message:"invalid credentials"})
        }
        // const user=await bcrypt.compare(password,userExist.password)
        const user=await userExist.comparePassword(password);
        if(user){
            res.status(201).json({
                msg:"login successfull",
                token:await userExist.generateToken(),
                userId:userExist._id.toString()
            })
        }
        else{
            res.status(401).json({message:"Invalid email or password"})
        }
    }
    catch(error)
    {
        next(error)
    }  
}
const user=async (req,res)=>{
    try {
        const userData=req.user;
        console.log(userData)
        res.status(200).json({userData})
    } catch (error) {
        console.log(`error from user ${error}`)
    }
}

module.exports={home,register,login,user}