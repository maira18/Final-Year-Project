//database
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Sns", {useNewUrlParser: true}, (error)=>{

    if(!error)
    {
        console.log("Connection Succeeded");
    }
    else
    {
        console.log("Error in connecting to db");
    }
});
const User=require("../model/user.model");

