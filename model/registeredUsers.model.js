const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const RegisterUserSchema=new Schema({
    userName:{
        type:String,
        required:true
    },
    userNumber:{
        type:Number,
        required:true
    },
});
module.export=mongoose.model("RegisterUser",RegisterUserSchema);
