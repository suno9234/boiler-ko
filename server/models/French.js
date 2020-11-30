const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const FrenchSchema = mongoose.Schema({

    id:{
        type: String
    },
    menuName:{
        type:String
    },
    coffie :{
        
    },
    wine :{

    },
    salad : {

    }
    ,meat   :{
        
    },
    isvalentine:{

    },
    status:{

    },
    address:{
        
    },time:{
        
    }



})
const French= mongoose.model('French',FrenchSchema)
module.exports={French}