const mongoose = require('mongoose');



const userModel = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
},
    {
        timeStamp: true
    });

const User = mongoose.Model("User",userModel);
module.exports = User;