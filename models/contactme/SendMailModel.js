import mongoose from "mongoose";


const SendMailSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:Number,required:true},
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'Users',required: true,}
})

export default mongoose.Model('SendMails',SendMailSchema);