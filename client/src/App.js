import React from "react";
import Navigation from './components/css/Navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/view/LandingPage.js'
import LoginPage from './components/view/LoginPage'
import RegisterPage from './components/view/RegisterPage'
import LoginedPage from'./components/view/LoginedPage'
import AdminPage from'./components/view/AdminPage'
import SimpleOrderPage from './components/view/SimpleOrderPage'
import Menuselect from './components/view/Menuselect'


import Auth from './hoc/auth';

//Auth(a,b,c)
//b null = 아무나 / true = 로그인한 유저만 / false 로그인한 유저는 출입불가능
//c true = 관리자

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Auth(LandingPage,null)}/>
          <Route exact path="/login" component ={Auth(LoginPage,false)}/>
          <Route exact path="/register" component = {Auth(RegisterPage,false)}/>
          
          <Route exact path="/logined" component={Auth(LoginedPage,true)}/>
          <Route exact path="/admin" component={Auth(AdminPage,true,true)}/>
          <Route exact path='/menuselect' component={Auth(Menuselect,true)}/>
          <Route exact path='/past' component={Auth(SimpleOrderPage,true)}/>

        </Switch>
      </div>
    </Router>
  );
}


export default App;
