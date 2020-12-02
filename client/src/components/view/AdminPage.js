import React, { useEffect } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  ListGroup,
} from "react-bootstrap";

function AdminPage(props) {
  var data;

  Axios.post("/api/data/showOrder").then(async function (response) {
    data = response.data;

    var target;
    var ml;
    var record;
    const record_ = "주문 현황";

    if (
      ((target = document.getElementById("orders")) != null) &&
      ((ml = document.createElement("li")) != null) &&
      ((target = document.getElementById("orders")) != null) &&
      ((record = document.createElement("span") )!= null)
    ) {
      ml.setAttribute('class', 'list-group-item');
      record.innerHTML = record_;
      ml.appendChild(record);
      target.appendChild(ml);

      for (var x in data) {
        var li;
        var br0;
        var br1;
        var br2;
        var br3;
        var br4;
        var br5
        var menuName;
        var menuName_;
        var isvalentine;
        var isvalentine_;
        var id;
        var id_;
        var add;
        var add_;
        var status;
        var status_;
        var bspan;
        var button;
        var time;
        var time_;

        if (
          (li = document.createElement("li")) != null &&
          (br0 = document.createElement("br")) != null &&
          (br1 = document.createElement("br")) != null &&
          (br2 = document.createElement("br")) != null &&
          (br3 = document.createElement("br")) != null &&
          (br4 = document.createElement("br")) != null &&
          (br5 = document.createElement("br")) != null &&
          (menuName = document.createElement("span")) != null &&
          (isvalentine = document.createElement("span")) != null
        ) {
          li.setAttribute("id", data[x]._id);
          li.setAttribute("class", "list-group-item");

          menuName_ = `메뉴 : ${data[x].menuName}`;
          menuName.innerHTML = menuName_;

          var isvalentine_ = `발렌타인 디너 : ${data[x].isvalentine}`;
          isvalentine.innerHTML = isvalentine_;

          li.appendChild(menuName);
          li.appendChild(br0);
          li.appendChild(isvalentine);
          li.appendChild(br1);

          for (var y in data[x].options) {
            var option;
            if ((option = document.createElement("span")) != null) {
              var option_ = `${data[x].options[y]} : ${data[x].optionnum[y]} | `;
              option.innerHTML = option_;
              li.appendChild(option);
            }
          }

          li.appendChild(br2);

          if (
            (id = document.createElement("span")) != null &&
            (add = document.createElement("span")) != null &&
            (status = document.createElement("span")) != null &&
            (bspan = document.createElement("span")) != null &&
            (button = document.createElement("button")) != null&&
            (time = document.createElement('span'))!=null
          ) {
            id_ = `id : ${data[x].id}`;
            id.innerHTML = id_;
            li.appendChild(id);
            li.appendChild(br3);

            add_ = `주소 : ${data[x].address}`;
            add.innerHTML = add_;
            li.appendChild(add);
            li.appendChild(br4);

            status_ = `상태 : ${data[x].status}`;
            status.innerHTML = status_;
            li.appendChild(status);

            li.appendChild(br5)
            time_ = `주문 시간 : ${data[x].time}`
            time.innerHTML = time_;
            li.appendChild(time)


            bspan.setAttribute("class", "float-right");

            button.onclick = function () {
              changeStatus(data[x]._id);
              window.location.reload();
            };
            button.innerHTML = "조리 완료";
            bspan.appendChild(button);
            li.appendChild(bspan);
            target.appendChild(li);
          }
        }
      }
    }
  });

  function changeStatus(_id) {
    var id = { _id: _id };
    Axios.post("/api/admin/changeStatus", id);
  }

  const HomeHandler = () => {
    props.history.push("/logined");
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
          <Nav.Link onClick={LogoutHandler}>로그아웃</Nav.Link>
        </Nav>
      </Navbar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: " center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div id="orders" style={{ width: "800px",height:'100%', maxHeight: "800px" }}>
          <ListGroup id="orderlist"></ListGroup>
        </div>
      </div>
    </>
  );
}

export default withRouter(AdminPage);
