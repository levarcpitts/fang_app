const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        require: true,
        min:3,
        max: 20,
        unique: true
    },
    email: {
        type:String,
        required: true,
        max: 50,
        unique: true
    },

    password: {
        type:String,
        required: true,
        min: 6,
    },

    profilePicture:{
        type:String,
        default: "",
    },

    coverPicture:{
        type:String,
        default: "",
    }, 

    followers: {
        type:Array,
        default:[]
    },
    
    following: {
        type:Array,
        default:[]
    },
    isAdmin: {
        type:Boolean,
        defualt: false,
    },
    desc: {
        type:String,
        max: 50
    },
    city:{
        type: String,
        max: 50
    },
    graduation_year: {
        type: Number, 
        max:4
    },
    position: {
        type: Number,
        enum: [1,2,3]
    }
},
 { timestamps:true }
);

module.exports = mongoose.model("User", UserSchema)