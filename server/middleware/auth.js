const { User }= require("../models/User")

let auth=(req,res,next)=>{

    //클라이언트 쿠키에서 토큰을 가져옴
    let token = req.cookies.x_auth;
    User.findByToken(token,(err,user)=>{
        if(err)throw err;
        if(!user) return res.json({isAuth:false,error: true})

        req.token= token;
        req.user = user;
        next();
    })
    //복호화해서 user id를 찾음
}

User.findOne()

module.exports = {auth};