const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    userName:{type:String , required:true},
    subtask:{type:String , required:true},
    project:{type:String , required:true},
    email:{type:String , required:true},
    status:{type:String , required:true},
    tasks:{type:String , required:true},
    mobile:{type:Number , required:true},
    description:{type:String , required:true},
    tag:{type:String , required:true},
});



const User = mongoose.model("user",userSchema);


module.exports = User;
