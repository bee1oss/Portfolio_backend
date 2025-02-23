import mongoose from "mongoose";


const HeroNavSchema = mongoose.Schema({
    heronav:{type:String,required:true},
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'Users',required: true,}
})

export default mongoose.Model('HerNavs',HeroNavSchema);