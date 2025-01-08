const mongoose=require("mongoose")
// const URI="mongodb://127.0.0.1:27017/mern_admin"
const URI="mongodb+srv://akash007iu:9W4ndTzDVrdBbX5A@cluster0.zfhvc.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(URI)
const connectDb= async()=>{
    try{
        await mongoose.connect(URI)
        console.log("connection success")
    }
    catch(error){
        console.log("database connectiomn falied")
        process.exit(0)
    }
}
module.exports=connectDb;