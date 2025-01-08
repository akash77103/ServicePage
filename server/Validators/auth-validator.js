const {z}=require("zod")

const loginSchema=z.object({
    email:z.string({required_error:"email is required"})
    .trim()
    .email({message:"Email is required"})
    .min(3,{message:"email must be 3 characters"})
    .max(20,{message:"email must not be greater than 15 words"}),
    password:z.string({required_error:"password is required"})
    .trim()
    .min(7,{message:"password must be 7 characters"})
    .max(1024,{message:"password must not be greater than 15 words"})
})
const signupSchema=loginSchema.extend({
    username:z.string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be 3 characters"})
    .max(15,{message:"Name must not be greater than 15 words"}),
    email:z.string({required_error:"email is required"})
    .trim()
    .email({message:"Email is required"})
    .min(3,{message:"email must be 3 characters"})
    .max(20,{message:"email must not be greater than 15 words"}),
    phone:z.string({required_error:"phone is required"})
    .trim()
    .min(10,{message:"phone must be 10 digits"})
    .max(10,{message:"phone must not be greater than 15 words"}),
    password:z.string({required_error:"password is required"})
    .trim()
    .min(7,{message:"password must be 7 characters"})
    .max(1024,{message:"password must not be greater than 15 words"})
})

module.exports={signupSchema,loginSchema};