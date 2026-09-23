const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        requied: true
    },

    email:{
        type: String,
        requied: true
    },
    
    age:{
        type: Number,
        requied: true
    },

    course:{
        type: String,
        requied: true
    }

})

module.exports = userSchema;