import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import{withRouter }from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function RegisterPage(props) {

    const [Id, setid]=useState("")
    const [Password, setpwd]=useState("")
    const [Name,setname]=useState("")
    const [Checkpassword, setcheckpwd]=useState("")

    const onIdHandler = (event)=>{
      setid(event.currentTarget.value)
    }

    const onPwdHandler = (event)=>{
      setpwd(event.currentTarget.value)
    }

    const onNameHandler = (event)=>{
      setname(event.currentTarget.value)
    }

    const onCheckPwdHandler = (event)=>{
      setcheckpwd(event.currentTarget.value)
    }

    const HomeHandler=(event)=>{
      event.preventDefault();
      props.history.push('/')
      
    }
    const LoginHandler=(event)=>{
      event.preventDefault();
      props.history.push('/login')
    }

    const onSubmitHandler = (event)=>{
      event.preventDefault();
      
      if(Password !==Checkpassword){
        return alert('비밀번호가 동일하지 않습니다')
      }

      if(Name==""){
        return alert('이름을 입력해 주세요')
      }
      if(Id==""){
        return alert('아이디를 입력해 주세요')
      }
      if(Password==""){
        return alert('비밀번호를 입력해 주세요')
      }

      let body = {
        name : Name,
        id : Id,
        password : Password

      }

      Axios.post('/api/user/register',body)
      .then(function(response){
        console.log(response)
        if(response.status===200){
          alert("회원가입 성공")
          props.history.push('/login')
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
     
      <div style={{
        display:'flex', justifyContent: 'center', alignItems: ' center',
        width:'100%',height:'100vh'
      }}>

        <form style={{display:'flex', flexDirection:'column',height:'50vh',width:'400px'}}
          onSubmit={onSubmitHandler}
        >
          <label>name</label>
          <input type="text"value={Name} onChange={onNameHandler}/>

          <label>id</label>
          <input type="text"value={Id} onChange={onIdHandler}/>

          <label>password</label>
          <input type ="password" value={Password} onChange={onPwdHandler}/>

          <label>checkPassword</label>
          <input type ="password" value={Checkpassword} onChange={onCheckPwdHandler}/>
          <br/>

          <button type = "submit" style={{backgroundColor:'#37363d' ,color:'white',border:'#37363d',
        fontSize:'18px',marginTop:'5px',marginBottom:'5px'}}>
            register
          </button>
          <button onClick={LoginHandler} style={{backgroundColor:'#37363d' ,color:'white',border:'#37363d',
        fontSize:'18px',marginTop:'5px',marginBottom:'5px'}}>
            login
          </button>


        </form>
        
        </div>
          
    </>
      
      );
  }

  export default withRouter(RegisterPage)