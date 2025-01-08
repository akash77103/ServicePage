require("dotenv").config();
const express=require('express');
const cors=require("cors")
const app=express();
const authRoute=require("./router/auth-router")
const connectDb=require("./utils/db");
const adminRoute=require("./router/admin-router")
const adminContact=require("./router/admin-router")
const contactRoute=require("./router/contact-router")
const errorMiddleware = require("./middlewares/error-middleware");
const serviceRoute=require("./router/service-router")


var corsOptions = {
    origin: 'http://localhost:5173',
     method:"GET,POST,PUT,DELETE,PATCH,HEAD",
     credentials:true,
  }

app.use(cors(corsOptions))
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/form",contactRoute)
app.use("/api/data",serviceRoute)
//admin panel
app.use("/api/admin",adminRoute)
app.use("/api/admin/contact",adminContact)

app.use(errorMiddleware)
const PORT=5000
connectDb().then(()=>{
    app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})

})