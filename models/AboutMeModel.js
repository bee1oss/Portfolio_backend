import mongoose from "mongoose";


const AboutMeSchema = mongoose.Schema({
    title_aboutme:{type:String,required:true},
    description_aboutme:{type:String,required:true},
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'Users',required: true,}
})

export default mongoose.Model('AboutMes',AboutMeSchema);