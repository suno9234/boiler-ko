const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const { User } = require('./server/models/User');
const { auth } = require('./server/middleware/auth.js');
const { French } = require('./server/models/French')
const { English } = require('./server/models/English')
const { Champagne } = require('./server/models/Champagne')

const config = require('./server/config/key.js');
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



app.post('/api/user/register',(req,res)=>{
    
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

app.post('/api/user/order',auth,(req,res)=>{
    //주문에 필요한 정보를 가져오면 데이터베이스에 넣어준다
    var id=req.user.id;
    var menu=req.body;
    menu.id=id;
    menu.status='ordered'
    console.log('-------------')
    console.log(menu)
    console.log('-------------')

    var mSch
    if(menu.menuName==='French'){
        mSch=new French(menu)
    }else if(menu.menuName==='English'){
        mSch=new English(menu)
    }else if(menu.menuName==='Champagne'){
        mSch=new Champagne(menu)
    }else{
        console.log('SchemaError')
    }
    
    console.log(mSch)
    mSch.save((err,menuinfo)=>{
        if(err) return res.json({success: false,err})
        return res.status(200).json({
            menusave : true
        })
    }) 
})

app.post('/api/user/login',(req,res)=>{
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
                .json({loginSuccess: true,  Token : user.token})


            })

        })

    })

    

    

    //비밀번호가 맞다면 토큰을 생성한다.

})

app.get('/api/user/auth',auth,(req,res)=>{

    res.status(200).json({
        id:req.user.id,
        isAdmin: req.user.role ===0? false:true,
        isAuth : true
        
    })
    
    

})

app.get('/api/user/logout',auth,(req,res)=>{
    User.findOneAndUpdate({id:req.user.id},{token: ""},(err,user)=>{
            
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success:true
            })
        })

})
app.listen(port, () => console.log(`Example app listening on port ${port}`))