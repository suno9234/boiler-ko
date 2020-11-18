const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const config = require('./config/key');
const cookieParser =require('cookie-parser');

//git remote add origin git@github.com:suno9234/boiler-ko.git

//application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

//application/json
app.use(bodyParser.json());


mongoose.connect(config.mongoURI,{
    useNewUrlParser:true,useUnifiedTopology : true, useCreateIndex : true, useFindAndModify: false}
).then(()=>console.log('MongoDB Connected....'))
 .catch(err=> console.log(err))


app.get('/',(req,res)=>res.send('Hello World!~~안녕하세요2'))

app.post('/register',(req,res)=>{
    
    //회원가입할때 필요한 정보들을 client에서 가져오면
    //database에 넣어준다.

    const user = new User(req.body)

    user.save((err,userInfo)=>{
        if(err) return res.json({success: false,err})
        return res.status(200).json({
            success: true
        })
    })

})

app.post('/login',(req,res)=>{
    //요청된 아이디를 데이터베이스세서 있는지 찾아야 한다.
    User.findOne({id: req.body.id},(err,user)=>{
        if(!user){
            return res.json({
                loginSuccess: false,
                message : " User not Found"
            })
        }
        //요청된 아이디와 비밀번호가 일치하는지 확인해야 한다.

        user.comparePassword(req.body.password , (err, isMatch)=>{
            if(!isMatch)
                return res.json({
                    loginSuccess: false,
                    message:"Wrong Password"
                })

            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie("x_auth",user.token)
                .status(200)
                .json({loginSuccess: true,  userId:user.token})


            })

        })

    })

    

    

    //비밀번호가 맞다면 토큰을 생성한다.

})


app.listen(port, () => console.log(`Example app listening on port ${port}`))