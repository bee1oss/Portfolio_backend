import mongoose from "mongoose";


const LinkSchema = mongoose.Schema({
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    adress:{type:String,required:true},
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'Users',required: true,}

})

export default mongoose.Model('Links',LinkSchema);