import React from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import {
  Navbar,
  Nav,
  ListGroup,
  
} from "react-bootstrap";

function SimpleOrderPage(props) {
  var data;

  Axios.post("/api/data/showIdOrder").then(function (response) {
    data = response.data;

    var target;
    var ml;
    var record;
    const record_ = "주문 기록";

    if (
      (target = document.getElementById("orderlist")) != null &&
      (ml = document.createElement("li")) != null &&
      (record = document.createElement("span")) != null
    ) {
      ml.setAttribute("class", "list-group-item");
      record.innerHTML = record_;
      ml.appendChild(record);
      target.appendChild(ml);

      for (var x in data) {
        var li;
        var menuName;
        var menuName_;
        var isvalentine;
        var isvalentine_;
        var status;
        var status_;
        var bspan;
        var button;
        var br0
        var br1
        var br2
        var br3
        var time
        var time_

        if (
          (li = document.createElement("li")) != null &&
          (menuName = document.createElement("span")) != null &&
          (isvalentine = document.createElement("span")) != null&&
          ((br0=document.createElement("br"))!=null)&&
          ((br1=document.createElement("br"))!=null)&&
          ((br2=document.createElement("br"))!=null)&&
          ((br3=document.createElement('br'))!=null)
        ) {
          
          li.setAttribute("id", data[x]._id);
          li.setAttribute("class", "list-group-item");

          menuName_ = `메뉴 : ${data[x].menuName} `;
          menuName.innerHTML = menuName_;
          li.appendChild(menuName);
          li.appendChild(br0)

          isvalentine_ = `발렌타인디너 : ${data[x].isvalentine} `;
          isvalentine.innerHTML = isvalentine_;
          li.appendChild(isvalentine);
          li.appendChild(br1)

          for (var y in data[x].options) {
            var option;
            var option_;
            if (data[x].status=='조리완료'){
              li.setAttribute("class","list-group-item list-group-item-dark")
            }
            if ((option = document.createElement("span")) != null) {
              option_ = `${data[x].options[y]} : ${data[x].optionnum[y]} | `;

              option.innerHTML = option_;

              li.appendChild(option);
            }
          }
          li.appendChild(br2)
          if (
            (status = document.createElement("span")) != null &&
            (bspan = document.createElement("span")) != null &&
            (button = document.createElement("button")) != null &&
            (time = document.createElement("span"))!=null
          ) {
            status_ = `주문 상태 : ${data[x].status} `;
            status.innerHTML = status_;
            li.appendChild(status);

            li.appendChild(br3)
            time_ = `주문 시간 : ${data[x].time}`
            time.innerHTML = time_;
            li.appendChild(time)


            bspan.setAttribute("class", "float-right");
            button.setAttribute("id", data[x]._id);
            button.innerHTML = "재주문";
            button.onclick = function () {
              inputcreditinfo(data[x]._id);
            };

            bspan.appendChild(button);
            li.appendChild(bspan);
            target.appendChild(li);
          }
        }
      }
    }
    function inputcreditinfo(_id) {
      var _id = _id;
      

      var fulldiv = document.getElementById("fulldiv");
      fulldiv.innerHTML = "";

      var innerdiv=document.createElement('div')

      var cardlabel = document.createElement("label");
      var pwdlabel = document.createElement("label");

      var cardinfo = document.createElement("input");
      var cardpwd = document.createElement("input");

      var realpay = document.createElement("button");

      cardinfo.setAttribute("type", "text");
      cardpwd.setAttribute("type", "password");

      cardinfo.setAttribute("id", "cardinfo");
      cardpwd.setAttribute("id", "cardpwd");

      realpay.setAttribute("id", "realpay");
      realpay.setAttribute("value", "pay");
      cardlabel.innerHTML = "카드번호";
      pwdlabel.innerHTML = "카드 비밀번호";

      realpay.innerHTML = "결제하기";
      realpay.onclick = function () {
        reOrder(_id);
      };

      var br0=document.createElement("br")
      var br1=document.createElement("br")
      var br2=document.createElement("br")
      var br3=document.createElement("br")

      innerdiv.appendChild(cardlabel);
      innerdiv.appendChild(br0)
      innerdiv.appendChild(cardinfo);
      innerdiv.appendChild(br1)
      innerdiv.appendChild(pwdlabel);
      innerdiv.appendChild(br2)
      innerdiv.appendChild(cardpwd);
      innerdiv.appendChild(br3)
      innerdiv.appendChild(realpay);
      fulldiv.appendChild(innerdiv)
    }

    function reOrder(_id) {
      console.log('reorder...')
      var id = { _id: _id };
      Axios.post("/api/user/reOrder", id)
      .then(function(response){
          console.log(response)
          alert("주문 완료")
          window.location.reload();
      }
      );
    }
  });
  const HomeHandler = () => {
    props.history.push("/logined");
  };

  const OrderHandler = () => {
    props.history.push("/menuselect");
  };
  const LogoutHandler = () => {
    Axios.get("/api/user/logout").then(function (response) {
      alert("로그아웃 완료");
      props.history.push("/");
    });
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand onClick={HomeHandler}>Mr.Dinner Service</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link onClick={OrderHandler}>주문하기</Nav.Link>
          <Nav.Link onClick={LogoutHandler}>로그아웃</Nav.Link>
        </Nav>
      </Navbar>
      <div id="fulldiv"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: " center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div id="orders" style={{ width: "800px" , height:'100%' }}>
          <ListGroup id="orderlist"></ListGroup>
        </div>
        <div
          id="cardinfo"
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "15px",
            marginTop: "15px",
          }}
        ></div>
      </div>
    </>
  );
}

export default withRouter(SimpleOrderPage);
