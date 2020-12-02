import React,{ useState} from 'react'
import Axios from 'axios'
import{withRouter }from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function LoginPage(props) {

    const [Id, setid]=useState("")
    const [Password, setpwd]=useState("")

    const onIdHandler = (event)=>{
      setid(event.currentTarget.value)
    }

    const onPwdHandler = (event)=>{
      setpwd(event.currentTarget.value)
    }

    const RegisterHandler=()=>{
      props.history.push('/register')
    }

    const HomeHandler=(event)=>{
      event.preventDefault();
      props.history.push('/')
      
    }
    const onSubmitHandler = (event)=>{
      event.preventDefault();
      
      let body = {
        id : Id,
        password : Password

      }

      Axios.post('/api/user/login',body)
      .then(function(response){
        console.log(response)
        if(response.data.loginSuccess===true){
          alert('로그인 성공')
          props.history.push('/logined')
        }else{
          alert('아이디와 비밀번호를 확인하세요')
        }
      })

    }

    return (
      <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={HomeHandler}>Mr.Dinner Service</Navbar.Brand>
      <Nav className="mr-auto">
        
        
      </Nav>
    </Navbar>
    <br />
    <form style={{display:'flex', flexDirection:'column',height:'50px',width:'400px',margin:'0 auto',marginTop:'200px'}}
          onSubmit={onSubmitHandler}
        >
          <label>id</label>
          <input type="text"value={Id} onChange={onIdHandler}/>
          <label>password</label>
          <input type ="password" value={Password} onChange={onPwdHandler}/>
          <br/>
          <button type = "submit" style={{backgroundColor:'#37363d',color:'white',border:'#37363d'
        ,fontSize:'18px',marginTop:'5px',marginBottom:'5px'}} >
            login
          </button>
          
          <button onClick={RegisterHandler} style={{backgroundColor:'#37363d' ,color:'white',border:'#37363d',
        fontSize:'18px',marginTop:'5px',marginBottom:'5px'}}>
            register
          </button>

        </form>
        
  </>
      

        
      );
  }

  export default withRouter(LoginPage)