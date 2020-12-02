import React, { useState } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import valimg from "./imgs/val.JPG";
function Menuselect(props) {
  var menu;

  const payment = (event) => {
    event.preventDefault();

    var sb;
    var prod = 0;

    if ((sb = document.getElementById("menu")) != null) {
      if (sb.value === "none") {
        return alert("메뉴를 선택해주세요");
      } else if (sb.value === "f") {
        var coffee = document.getElementById("커피");
        var wine = document.getElementById("와인");
        var salad = document.getElementById("샐러드");
        var meat = document.getElementById("고기");
        var isvalentine = document.getElementById("isValentine");
        var isval;

        if (
          isvalentine.options[isvalentine.selectedIndex].value === "valentine"
        ) {
          isval = true;
        } else {
          isval = false;
        }

        menu = {
          menuName: "French",
          options: ["coffee", "wine", "salad", "meat"],
          optionnum: [coffee.value, wine.value, salad.value, meat.value],
          isvalentine: isval,
        };
        if (
          coffee.value == "0" &&
          wine.value == "0" &&
          salad.value == "0" &&
          meat.value == "0"
        ) {
          return alert("1개 이상의 소메뉴를 주문해주세요");
        } else {
          var newdiv = document.getElementById("new");
          newdiv.setAttribute(
            "style",
            "display: flex ; justify-content: center ; align-items: center; width : 100% ; height: 100vh"
          );

          newdiv.innerHTML = "";

          var innerdiv = document.createElement("div");

          var cardlabel = document.createElement("label");
          var pwdlabel = document.createElement("label");
          var addlabel = document.createElement("label");

          var cardinfo = document.createElement("input");
          var cardpwd = document.createElement("input");
          var address = document.createElement("input");
          var realpay = document.createElement("button");

          cardinfo.setAttribute("type", "text");
          cardpwd.setAttribute("type", "password");
          address.setAttribute("type", "text");

          cardinfo.setAttribute("id", "cardinfo");
          cardpwd.setAttribute("id", "cardpwd");
          address.setAttribute("id", "address");

          realpay.setAttribute("id", "realpay");
          realpay.setAttribute("value", "pay");
          cardlabel.innerHTML = "카드번호";
          pwdlabel.innerHTML = "카드 비밀번호";
          addlabel.innerHTML = "주소";
          realpay.innerHTML = "결제하기";
          realpay.setAttribute("style", "width:160px;");
          realpay.onclick = realpayf;

          var br0 = document.createElement("br");
          var br1 = document.createElement("br");
          var br2 = document.createElement("br");
          var br3 = document.createElement("br");
          var br4 = document.createElement("br");
          var br5 = document.createElement("br");

          innerdiv.appendChild(cardlabel);
          innerdiv.appendChild(br0);
          innerdiv.appendChild(cardinfo);
          innerdiv.appendChild(br1);
          innerdiv.appendChild(pwdlabel);
          innerdiv.appendChild(br2);
          innerdiv.appendChild(cardpwd);
          innerdiv.appendChild(br3);
          innerdiv.appendChild(addlabel);
          innerdiv.appendChild(br5);
          innerdiv.appendChild(address);
          innerdiv.appendChild(br4);
          innerdiv.appendChild(realpay);

          newdiv.appendChild(innerdiv);
        }
      } else if (sb.value === "e") {
        var eggscramble = document.getElementById("에그 스크램블");
        var bacon = document.getElementById("베이컨");
        var bread = document.getElementById("빵");
        var steak = document.getElementById("스테이크");
        var isvalentine = document.getElementById("isValentine");
        var isval;

        if (
          isvalentine.options[isvalentine.selectedIndex].value === "valentine"
        ) {
          isval = true;
        } else {
          isval = false;
        }

        menu = {
          menuName: "English",
          options: ["eggscramble", "bacon", "bread", "steak"],
          optionum: [eggscramble.value, bacon.value, bread.value, steak.value],
          isvalentine: isval,
        };
        if (
          eggscramble.value == "0" &&
          bacon.value == "0" &&
          bread.value == "0" &&
          steak.value == "0"
        ) {
          return alert("1개 이상의 소메뉴를 주문해주세요");
        } else {
          var newdiv = document.getElementById("new");
          newdiv.setAttribute(
            "style",
            "display: flex ; justify-content: center ; align-items: center; width : 100% ; height: 100vh"
          );

          newdiv.innerHTML = "";

          var innerdiv = document.createElement("div");

          var cardlabel = document.createElement("label");
          var pwdlabel = document.createElement("label");
          var addlabel = document.createElement("label");

          var cardinfo = document.createElement("input");
          var cardpwd = document.createElement("input");
          var address = document.createElement("input");
          var realpay = document.createElement("button");

          cardinfo.setAttribute("type", "text");
          cardpwd.setAttribute("type", "password");
          address.setAttribute("type", "text");

          cardinfo.setAttribute("id", "cardinfo");
          cardpwd.setAttribute("id", "cardpwd");
          address.setAttribute("id", "address");

          realpay.setAttribute("id", "realpay");
          realpay.setAttribute("value", "pay");
          cardlabel.innerHTML = "카드번호";
          pwdlabel.innerHTML = "카드 비밀번호";
          addlabel.innerHTML = "주소";
          realpay.innerHTML = "결제하기";
          realpay.setAttribute("style", "width:160px;");
          realpay.onclick = realpayf;

          var br0 = document.createElement("br");
          var br1 = document.createElement("br");
          var br2 = document.createElement("br");
          var br3 = document.createElement("br");
          var br4 = document.createElement("br");
          var br5 = document.createElement("br");

          innerdiv.appendChild(cardlabel);
          innerdiv.appendChild(br0);
          innerdiv.appendChild(cardinfo);
          innerdiv.appendChild(br1);
          innerdiv.appendChild(pwdlabel);
          innerdiv.appendChild(br2);
          innerdiv.appendChild(cardpwd);
          innerdiv.appendChild(br3);
          innerdiv.appendChild(addlabel);
          innerdiv.appendChild(br5);
          innerdiv.appendChild(address);
          innerdiv.appendChild(br4);
          innerdiv.appendChild(realpay);

          newdiv.appendChild(innerdiv);
        }
      } else if (sb.value === "c") {
        var champagne = document.getElementById("샴페인");
        var baguette = document.getElementById("바게트빵x4");
        var coffee_one_port = document.getElementById("커피 한 포트");
        var isvalentine = document.getElementById("isValentine");
        var isval;

        if (
          isvalentine.options[isvalentine.selectedIndex].value === "valentine"
        ) {
          isval = true;
        } else {
          isval = false;
        }

        menu = {
          menuName: "Champagne",
          options: ["champagne", "baguette", "coffee_one_port"],
          optionnum: [champagne.value, baguette.value, coffee_one_port.value],
          isvalentine: isval,
        };
        if (
          champagne.value == "0" &&
          baguette.value == "0" &&
          coffee_one_port.value == "0"
        ) {
          return alert("1개 이상의 소메뉴를 주문해주세요");
        } else {
          var newdiv = document.getElementById("new");
          newdiv.setAttribute(
            "style",
            "display: flex ; justify-content: center ; align-items: center; width : 100% ; height: 100vh"
          );

          newdiv.innerHTML = "";

          var innerdiv = document.createElement("div");

          var cardlabel = document.createElement("label");
          var pwdlabel = document.createElement("label");
          var addlabel = document.createElement("label");

          var cardinfo = document.createElement("input");
          var cardpwd = document.createElement("input");
          var address = document.createElement("input");
          var realpay = document.createElement("button");

          cardinfo.setAttribute("type", "text");
          cardpwd.setAttribute("type", "password");
          address.setAttribute("type", "text");

          cardinfo.setAttribute("id", "cardinfo");
          cardpwd.setAttribute("id", "cardpwd");
          address.setAttribute("id", "address");

          realpay.setAttribute("id", "realpay");
          realpay.setAttribute("value", "pay");
          cardlabel.innerHTML = "카드번호";
          pwdlabel.innerHTML = "카드 비밀번호";
          addlabel.innerHTML = "주소";
          realpay.innerHTML = "결제하기";
          realpay.setAttribute("style", "width:160px;");
          realpay.onclick = realpayf;

          var br0 = document.createElement("br");
          var br1 = document.createElement("br");
          var br2 = document.createElement("br");
          var br3 = document.createElement("br");
          var br4 = document.createElement("br");
          var br5 = document.createElement("br");

          innerdiv.appendChild(cardlabel);
          innerdiv.appendChild(br0);
          innerdiv.appendChild(cardinfo);
          innerdiv.appendChild(br1);
          innerdiv.appendChild(pwdlabel);
          innerdiv.appendChild(br2);
          innerdiv.appendChild(cardpwd);
          innerdiv.appendChild(br3);
          innerdiv.appendChild(addlabel);
          innerdiv.appendChild(br5);
          innerdiv.appendChild(address);
          innerdiv.appendChild(br4);
          innerdiv.appendChild(realpay);

          newdiv.appendChild(innerdiv);
        }
      }
    }

    function realpayf() {
      var raddress;
      var rcardinfo;
      var rcardpwd;
      if (
        (raddress = document.getElementById("address")) != null ||
        (rcardinfo = document.getElementById("cardinfo")) != null ||
        (rcardpwd = document.getElementById("cardpwd")) != null
      ) {
        if (raddress.value.length > 0) {
          menu.address = raddress.value;
          menu.time = new Date();
          alert("결제 완료");
          Axios.post("/api/user/order", menu);
          props.history.push("/logined");
        } else {
          alert("모든 정보를 입력해 주세요");
          return false;
        }
      }
    }
  };
  const onChangeHandler = (event) => {
    event.preventDefault();

    var good_f = ["커피", "와인", "샐러드", "고기"];
    var good_e = ["에그 스크램블", "베이컨", "빵", "스테이크"];
    var good_c = ["샴페인", "바게트빵x4", "커피 한 포트"];

    var menu = document.getElementById("menu");
    var target = document.getElementById("div");

    if (menu.value === "f") var d = good_f;
    else if (menu.value === "e") var d = good_e;
    else if (menu.value === "c") var d = good_c;

    target.innerHTML = "";

    for (var x in d) {
      var menus = document.createElement("select");
      menus.setAttribute("id", d[x]);

      menus.options.length = 0;

      var smallmenu = document.createElement("h3");
      var smtext = document.createTextNode(d[x]);

      smallmenu.appendChild(smtext);

      for (var i = 0; i < 5; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.text = i;

        menus.appendChild(opt);
      }

      var tempdiv = document.createElement("div");
      tempdiv.setAttribute(
        "style",
        "display:'flex'; alignItems:'center' ;justifyContent:'center' ; width: 250px "
      );

      tempdiv.appendChild(smallmenu);
      tempdiv.appendChild(menus);

      target.appendChild(tempdiv);
    }
  };
  const HomeHandler = () => {
    props.history.push("/logined");
  };
  const PastHandler = () => {
    props.history.push("/past");
  };
  const LogoutHandler = () => {
    Axios.get("/api/user/logout").then(function (response) {
      alert("로그아웃 완료");
      props.history.push("/");
    });
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" margin="0px" padding="0px">
        <Navbar.Brand onClick={HomeHandler}>Mr.Dinner Service</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link onClick={PastHandler}>주문내역</Nav.Link>
          <Nav.Link onClick={LogoutHandler}>로그아웃</Nav.Link>
        </Nav>
      </Navbar>
      <div
        id="new"
        style={{
          width: "100vw",
          height: "100%",
          display: "table-cell",
          verticalAlign: "middle",
        }}
      >
        <div
          id="choice"
          style={{ float: "left", width: "100%", height: "100px" }}
        >
          <div
            id="menudiv"
            style={{
              width: "33.33%",
              height: "100px",
              backgroundColor: "red",
              float: "left",
            }}
          >
            <select
              id="menu"
              onChange={onChangeHandler}
              style={{ width: "100%", height: "100px" }}
            >
              <option value="none">메뉴를 고르세요</option>
              <option value="f">French</option>
              <option value="e">English</option>
              <option value="c">Champagne</option>
            </select>
          </div>
          <div
            id="valdiv"
            style={{
              width: "33.33%",
              height: "100px",
              backgroundColor: "blue",
              float: "left",
            }}
          >
            <select
              id="isValentine"
              style={{
                width: "100%",
                height: "100px",
              }}
            >
              <option value="none">옵션</option>
              <option value="valentine">발렌타인 디너 추가</option>
            </select>
          </div>
          <div
            id="pay"
            style={{
              width: "33.33%",
              height: "100px",
              backgroundColor: "yellow",
              float: "left",
            }}
          >
            <button
              onClick={payment}
              style={{ width: "100%", height: "100px" }}
            >
              결제하기
            </button>
          </div>
        </div>

        <div
          id="div"
          style={{
            verticalAlign: "middle",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            float: "left",
            width: "100%",
            height: "100px",
            backgroundColor: "darkgray",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "400px",
            backgroundColor: "gray",
          }}
        >
          <div
            id="exvalen"
            style={{
              width: "900px",
              marginTop: "250px",
              height: "400px",
            }}
          >
            <div
              style={{
                float: "left",
                height: "400px",
                width: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={valimg}
                alt="myImage"
                style={{ marginTop: "100px", marginBottom: "100px" }}
              ></img>
            </div>
            <div
              style={{
                float: "right",
                height: "400px",
                width: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <ul>
                <li>
                  <h3>Valentine Dinner</h3>
                </li>
                <li>옵션을 선택하시면 다음과 같은 서비스가 추가됩니다</li>
                <li>작은 하트모양과 큐피드가 장식된 접시</li>
                <li>냅킨</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Menuselect);
