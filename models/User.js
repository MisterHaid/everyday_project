import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    FullName:{
        type:  String,
        required: false,
    },
    email:{
        type:  String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required:true,
    },
    avatarUrl:String,
},
    {
        timestamps:true,
    }
);
export default mongoose.model('User',UserSchema);