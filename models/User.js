const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength:30
    }
})

const User= mongoose.model('User',userSchema)

module.exports ={ User }