import React, { useEffect } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import frenimg from './imgs/fren.jpg'
import englishimg from './imgs/english.jpg'
import chamimg from './imgs/sham.jpg'

function LoginedPage(props) {
  
  const OrderHandler = () => {
    props.history.push("/menuselect");
  };
  
  const PastHandler = () => {
    props.history.push("/past");
  };

  const AdminHandler = () => {
    props.history.push("/admin");
  };




  const onClickHandler = () => {
    Axios.get("/api/user/logout").then(function (response) {
      alert("로그아웃 완료");
      props.history.push("/");
    });
  };

  return (
    <>
    <div style={{minWidth:'1500',minHeight:'900'}}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Mr.Dinner Service</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link onClick={AdminHandler}>관리자 모드</Nav.Link>
          <Nav.Link onClick={OrderHandler}>주문하기</Nav.Link>
          <Nav.Link onClick={PastHandler}>주문내역</Nav.Link>
          <Nav.Link onClick={onClickHandler}>로그아웃</Nav.Link>
        </Nav>
      </Navbar>
      <br />
      <div id="imgs" >

        <div id="hello" style={{borderBottom:'1px solid silver', height:'10vh' ,lineHeight:'10vh',textAlign:'center',margin:'auto', fontSize:'40'}}>
          <h4>특별한 날에 집에서 편안히 보내면서 당신의 남편, 아내, 엄마, 아버지, 또는 친구를 감동시키세요</h4>
        </div>

        <div id ="french" style={{height:'250px',borderBottom:'1px solid silver' }}>
          <div id = 'frenchimg' style={{display:'flex' ,alignItems: " center",float: 'left',height:'250px',width:'500px'}}>
          <div id = 'verticalF'>
          <ul>
            <li>
              <h1>French Dinner</h1>
            </li>
            <li>
              a cup of coffee
            </li>
            <li>
              a glass of wine
            </li>
            <li>
              salad
            </li>
            <li>
              meat
            </li>
          </ul>
          </div>
          </div>
          <div id= ' frenchmenual'style={{float: 'right',height:'250px',width:'350px'}}>
            <img src={frenimg} height='100%' width='100%'></img>
          </div>

        </div>
        <div id ="english" style={{height:'250px',borderBottom:'1px solid silver'}}>
        <div id = 'englishimg' style={{display:'flex' ,alignItems: " center",float: 'left',height:'250px',width:'500px'}}>
          <ul>
            <li>
              <h1>English Dinner</h1>
            </li>
            <li>
              egg scramble
            </li>
            <li>
              baccon
            </li>
            <li>
              bread
            </li>
            <li>
              steak
            </li>
          </ul>
          </div>
          <div id= ' englishmenual'style={{float: 'right',height:'250px',width:'350px' }}>
          <img src={englishimg} height='100%' width='100%'></img>
          </div>
        </div>
        <div id ="champagne" style={{height:'250px'}}>
        <div id = 'champagneimg' style={{display:'flex' ,alignItems: " center",float: 'left',height:'250px',width:'500px'}}>
        <ul>
            <li>
            <h1>Champagne Dinner</h1>
            </li>
            <li>
              a bottle of Shampagne
            </li>
            <li>
              4 baguettes
            </li>
            <li>
              a pot of coffee
            </li>
          </ul>
          </div>
          <div id= ' chammenual'style={{float: 'right',height:'25vh',width:'350px'}}>
          <img src={chamimg} height='100%' width='100%'></img>
          </div>
        </div>
        </div>
      </div>

    </>
  );
}

export default withRouter(LoginedPage);
