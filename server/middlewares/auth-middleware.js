const jwt=require('jsonwebtoken')
const User=require("../models/user-model")
const authMiddleware=async (req,res,next)=>{
    const token=req.header('Authorization')
    if(!token){
        return res.status(401).json({message:"Token not providede"})
    }
    
    const jwtToken=token.replace('Bearer ',"")
    console.log("token from auth middleware",jwtToken)
    
    try {
        const isVerifies=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
        console.log(isVerifies);
        const userData=await User.findOne({email:isVerifies.email})
            .select({
                password:0,
            })
        
        console.log(userData)
        req.user=userData;
        req.token=token;
        req.userID=userData._id
        next()
    } catch (error) {
        return res.status(401).json({message:"Token not providede"})
    }
}
module.exports=authMiddleware