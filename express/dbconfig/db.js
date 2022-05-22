const mongoose = require('mongoose')
const dotenv = require('dotenv')

const connectDB = async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(()=>console.log("DB CONNECTED"))
    }catch(e){
        console.log(e)
    }
}
module.exports = connectDB