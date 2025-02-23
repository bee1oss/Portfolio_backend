import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    email:{type: String,required:true},
    paswd:{type: String,required:true}
})

export default mongoose.Model('Users',UserSchema);