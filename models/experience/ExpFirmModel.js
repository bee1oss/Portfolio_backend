import mongoose from "mongoose";


const ExpFirmSchema = mongoose.Schema({
    title_firm:{type:String,required:true},
    job_tag:{type:String,required:true},
    firm_name:{type:String,required:true},
    job_year:{type:String,required:true},
    description_expe:{type:String,required:true},
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'Users',required: true,}
})

export default mongoose.Model('Experiences',ExperienceSchema);