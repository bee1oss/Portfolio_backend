import mongoose from "mongoose";


const ExperienceSchema = mongoose.Schema({
    title_exp:{type:String,required:true},
    description_expe:{type:String,required:true},
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'Users',required: true,}
})

export default mongoose.Model('Experiences',ExperienceSchema);