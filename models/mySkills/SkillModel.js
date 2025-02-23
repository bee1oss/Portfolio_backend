import mongoose from "mongoose";


const SkillSchema = mongoose.Schema({
    title_skill:{type:String,required:true},
    description_skill:{type:String,required:true},
    skilltag:{type: mongoose.Schema.Types.ObjectId,ref:"SkillTags",required:true},
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'Users',required: true,}
})

export default mongoose.Model('Skills',SkillSchema);