const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const EnglishSchema = mongoose.Schema({

    id:{
        type: String
    },
    menuName:{

    },
    eggscramble :{

    },
    bacon :{

    },
    bread : {

    },
    steak   :{
        
    },
    isvalentine:{

    },
    status:{

    },
    address:{
        
    },
    time:{
        
    }


})
const English= mongoose.model('English',EnglishSchema)
module.exports={English}