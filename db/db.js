const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

const URI = `mongodb+srv://${process.env.USERMOVIESDB}:${process.env.PASSMOVIESDB}@cluster0.afwuqrd.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;

const conectarDB = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("DB conectada.");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB;