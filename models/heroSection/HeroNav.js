import mongoose from "mongoose";


const HeroNavSchema = mongoose.Schema({
    heronav:{type:String,required:true}
})

export default mongoose.Model('HerNavs',HeroNavSchema);