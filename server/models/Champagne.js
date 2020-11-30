const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const ChampagneSchema = mongoose.Schema({

    id:{
        type: String
    },
    menuName:{

    },
    champagne :{

    },
    baguette :{

    },
    coffie_one_port : {

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
const Champagne= mongoose.model('Champagne',ChampagneSchema)
module.exports={Champagne}