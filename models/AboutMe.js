import mongoose from "mongoose";


const AboutMeSchema = mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
})

export default mongoose.Model('AboutMes',AboutMeSchema);