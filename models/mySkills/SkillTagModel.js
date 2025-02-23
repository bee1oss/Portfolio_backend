import mongoose from "mongoose";


const SkillTagSchema = mongoose.Schema({
    url:{type:String,required:true},
    title:{type:String,required:true},
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'Users',required: true,}
})

export default mongoose.Model('SkillTags',SkillTagSchema);