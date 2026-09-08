const mongoose=require('mongoose')
//const timestamps = require('mongoose-timestamp')
const Schema=mongoose.Schema

const userSchema=new Schema({
    FirstName:{type:String,required:true},
    LastName:{type:String},  
    MobileNo:{type:Number,required:true}, 
    email:{type:String,required:true},
    password:{type:String,required:true},
    profileImage:{type:String,required:true},
    //lastLogin:{type:Date,default:Date.now},
    userType:{type:String,default:'user',enum:['user','admin']},
    status:{type:String,default:'active',enum:['active','inactive']},
    //createdAt:{type:Date,default:Date.now},
   //updatedAt:{type:Date,default:Date.now}
})
//userSchema.plugin(timestamps,{index:true})
module.exports=mongoose.model('user',userSchema)