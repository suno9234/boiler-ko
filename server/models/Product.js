const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const ProductSchema = mongoose.Schema({

    id:{
        type: String
    },
    menuName:{
        type:String
    },
    options:{type:[String]        
    },
    optionnum:{type:[String]
    },
    isvalentine:{

    },
    style:{

    },
    status:{

    },
    address:{
        
    },
    time:{

    }



})
const Product= mongoose.model('Product',ProductSchema)
module.exports={Product}