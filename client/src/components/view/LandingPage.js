import React, { useEffect } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import frenimg from './imgs/fren.jpg'
import englishimg from './imgs/english.jpg'
import chamimg from './imgs/english.jpg'

function LandingPage(props) {
  const LoginHandler = (event) => {
    event.preventDefault();
    props.history.push("/login");
  };

  const RegisterHandler = (event) => {
    event.preventDefault();
    props.history.push("/register");
  };

  const OrderHandler = (event) => {
    event.preventDefault();
    props.history.push("/menuselect");
  };

  const HomeHandler = (event) => {
    event.preventDefault();
    props.history.push("/");
  };

  return (
    <>
    <div style={{minWidth:'1500px',minHeight:'900px'}}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand onClick={HomeHandler}>Mr.Dinner Service</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link onClick={OrderHandler}>Order</Nav.Link>
          <Nav.Link onClick={LoginHandler}>Login</Nav.Link>
          <Nav.Link onClick={RegisterHandler}>Register</Nav.Link>
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

export default withRouter(LandingPage);
