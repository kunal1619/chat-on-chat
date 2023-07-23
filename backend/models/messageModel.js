const mongoose = require("mongoose");

const messageModel = mongoose.Schema(
    {
        sender : {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        content: {type : String, trim:true}, 
        chat : {
            type: mongoose.Schema.Types.ObjectId, //kiss chat se ye msg belong kar rha hai
            ref : "Chat"
        }
    },
    {
        timestamps : true
    }
)

const Message = mongoose.model("Message", messageModel);

module.exports = Message;