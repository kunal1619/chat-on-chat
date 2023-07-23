const express = require("express");
const dotenv = require("dotenv")
const chats = require('./data/data')
const connectDB = require('./config/db')
const userRouter = require('./routes/userRoutes')
const {notFound, errorHandler}= require('./middleware/errorMiddleware')


const app = express();
dotenv.config();
app.use(express.json()); //to accept json data

app.get('/', (req, res)=>{
    res.send("API is running sucsessfully")
})


app.use("/api/user", userRouter)

app.use(notFound) //we will create two fun notfound and errorhandler to handle error if someone enter wrong password
app.use(errorHandler)

connectDB();

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server started on port ${PORT}`))