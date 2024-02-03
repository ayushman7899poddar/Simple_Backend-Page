const mongoose = require("mongoose");

const validator = require("validator");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        // validate(value){
        //     if(!validator(value)){
        //         throw new Error("Invalid Email Id");
        //     }
        // }
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        minLength:10
    },
    message:{
        type:String,
        required:true,
        minLength:3
    },
    date:{
        type:Date,
        default:Date.now
    }
});

//we need to make collction(model):
const User = new mongoose.model("User",userSchema);

module.exports = User;