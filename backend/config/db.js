const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        const conct = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser : true,
        })

        console.log("Database connected");
    }catch(error){
        console.log('error while connecting to DB', error.message);
    }
}

module.exports = connectDB