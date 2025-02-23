import mongoose from "mongoose";


const User = mongoose.Schema({
    fullName:{type:String,required:true},
    email:{type: String,required:true},
    paswdHash:{type: String,required:true},
},{
    timestamps:true,
})

export default mongoose.model('Users',User);