const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema(
    {
        name : {type : String, require: true},
        email : {type: String, require : true, unique : true},
        password : {type: String, require: true},
        pic:{
            type:String,
            require : true,
            default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        },
    },
    {timestamps : true}
);

//user ka login password aur database me stored password ko compare karengey
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

//incrypt the password before saving to database
userSchema.pre("save", async function (next){ //pre means save karney se pehley
    if(!this.isModified){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})


const User = mongoose.model("User", userSchema);

module.exports = User;