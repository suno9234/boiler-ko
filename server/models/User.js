const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { JsonWebTokenError } = require('jsonwebtoken');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');



const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    id:{
        type: String,
        maxlength:30
    },
    password:{
        type : String,
        maxlength : 300
    },
    defaultAddress:{
        type : String
    },
    token:{
        type: String
    },
    role:{
        
    },
    isAuth:{
        type: Boolean
    },
    order:{
        type : Object
    }

    
})

userSchema.pre('save',function(next){
    //비밀번호 암호화시키기
    var user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds , function( err , salt ) {
        
            if(err){
                return next(err)
            }
                
            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    }else{
        next()
    }
}) //user model에 정보를 저장하기 전에 하고 저장한다. 

userSchema.methods.comparePassword = function(plainPassword, cb){

    bcrypt.compare(plainPassword, this.password,function(err,isMatch){
        if(err)return cb(err)
        cb(null,isMatch)
    })

}


userSchema.methods.generateToken=function(cb){

    var user =this ;
    
    var token = jwt.sign(user.id, 'secretToken')

    user.token = token
    user.save(function(err,user){
        if(err) return cb(err)
        cb(null,user)
    })
}

userSchema.statics.findByToken = function(token,cb){
    var user= this;
    jwt.verify(token,'secretToken',function(err,decoded){
        user.findOne({"id":decoded,"token": token},function(err,user){
            if(err) return cb(err);
            cb(err,user)
        })

    })
}
const User= mongoose.model('User',userSchema)

module.exports ={ User }