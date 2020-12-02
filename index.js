const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { User } = require("./server/models/User");
const { auth } = require("./server/middleware/auth.js");
const { Product } = require("./server/models/Product");

const config = require("./server/config/key.js");
const cookieParser = require("cookie-parser");
const { response } = require("express");
const e = require("express");

//git remote add origin git@github.com:suno9234/boiler-ko.git

//application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//application/json
app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected...."))
  .catch((err) => console.log(err));

app.post("/api/data/showIdOrder", auth, (req, res) => {
  Product.find({ id: req.user.id }, function (err, docs) {
    if (err) console.log(err);
    return res.json(docs);
  });
});

app.post("/api/data/showOrder", auth, (req, res) => {
  Product.find({ status: "주문 완료" }, function (err, docs) {
    if (err) console.log(err);
    return res.json(docs);
  });
});

app.post("/api/admin/changeStatus", auth, (req, res) => {
  console.log(req.body);
  Product.updateOne(
    { _id: req.body._id },
    { status: "조리완료" },
    function (err, docs) {
      if (err) console.log(err);
      else {
        console.log("changed");
      }
    }
  );
});

app.post("/api/user/reOrder", auth, (req, res) => {
  console.log(req.body);
  Product.findOne({ _id: req.body._id }, function (err, docs) {
    if (err) console.log(err);
    else {
      var newdoc = new Product({});
      newdoc.status = "주문 완료";
      newdoc.options = docs.options;
      newdoc.optionnum = docs.optionnum;
      newdoc.menuName = docs.menuName;
      newdoc.isvalentine = docs.isvalentine;
      newdoc.address = docs.address;
      newdoc.id = docs.id;
      newdoc.time=new Date()
      console.log(newdoc.time)

      newdoc.save((err, menuinfo) => {
        if (err) return res.json({ success: false, err });
        else {
          console.log("reorder success");
          return res.status(200).json({
            menusave: true,
          });
        }
      });
    }
  });
});

app.post("/api/user/register", (req, res) => {
  //회원가입할때 필요한 정보들을 client에서 가져오면
  //database에 넣어준다.

  const user = new User(req.body);
  user.role = 0;

  user.save((err, userInfo) => {
    if (err) {
      console.log(err);
      return res.json({ success: false, err });
    }
    console.log("success");
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/api/user/order", auth, (req, res) => {
  //주문에 필요한 정보를 가져오면 데이터베이스에 넣어준다
  var id = req.user.id;
  var menu = req.body;
  menu.id = id;
  menu.status = "주문 완료";

  var mSch = new Product(menu);

  mSch.save((err, menuinfo) => {
    if (err) return res.json({ success: false, err });
    else {
      return res.status(200).json({
        menusave: true,
      });
    }
  });
});

app.post("/api/user/login", (req, res) => {
  //요청된 아이디를 데이터베이스세서 있는지 찾아야 한다.
  User.findOne({ id: req.body.id }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: " User not Found",
      });
    }
    //요청된 아이디와 비밀번호가 일치하는지 확인해야 한다.

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "Wrong Password",
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, Token: user.token });
      });
    });
  });

  //비밀번호가 맞다면 토큰을 생성한다.
});

app.get("/api/user/auth", auth, (req, res) => {
  //role ===0-> false else true
  res.status(200).json({
    id: req.user.id,
    isAdmin: req.user.role == 0 ? false : true,
    isAuth: true,
  });
});

app.get("/api/user/logout", auth, (req, res) => {
  User.findOneAndUpdate({ id: req.user.id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}`));
