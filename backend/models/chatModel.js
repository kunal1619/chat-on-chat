const mongoose = require("mongoose");

const chatModel = mongoose.Schema({
    chatName : {type: String, trim:true},
    isGroupChat : {type : Boolean, default : false},
    users : [
        {
            type : mongoose.Schema.Types.ObjectId,  //user schema se refrence le rahey hain
            ref : "User"
        }
    ],
    latestMessage : {
        type : mongoose.Schema.Types.ObjectId, //message schema se refrence le rahey hain
        ref : "Message"
    },
    groupAdmin : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamp : true, //for every chat unique time
}
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;

//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin