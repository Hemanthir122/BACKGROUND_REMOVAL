const express=require("express")
const cros=require('cors');
require('detenv').config();

//APP CONFIGURATION
const PORT =process.env.PORT || 4000
const app=express();


//MIddlewares
app.use(express.json())
app.use(cros());


//API ROUTES
app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>console.log("server running on the port",PORT));