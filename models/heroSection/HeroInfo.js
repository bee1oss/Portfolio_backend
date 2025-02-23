import mongoose from "mongoose";


const HeroSchema = mongoose.Schema({
    name:{type: String,required:true},
    surname:{type: String,required:true},
    userTag:{type: String,required:true},
    userSubTag:{type: String,required:true},
    heronav:{type: mongoose.Schema.Types.ObjectId,ref:"HerNavs",required:true}
})

export default mongoose.Model('HeroInfos',HeroSchema);