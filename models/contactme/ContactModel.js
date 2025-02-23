import mongoose from "mongoose";


const Contact = mongoose.Schema({
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    adress:{type:String,required:true},
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'Users',required: true,}
})

export default mongoose.model('Contacts',Contact);