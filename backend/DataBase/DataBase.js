const mongoose = require('mongoose');

const connection_uri = "mongodb://localhost:27017/ChatApp"

const connection = async ()=>{
    try{
        await mongoose.connect(connection_uri);
        console.log("DataBase connected");
    }catch(e){
        console.log(e.message);
        
    }
};

module.exports = connection;