import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import{withRouter }from 'react-router-dom'

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

    const onSubmitHandler = (event)=>{
      event.preventDefault();
      
      if(Password !==Checkpassword){
        return alert('비밀번호가 동일하지 않습니다')
      }

      let body = {
        name : Name,
        id : Id,
        password : Password

      }

      Axios.post('/api/user/register',body)
      .then(function(response){
        if(response.status===200){
          console.alert("회원가입 성공")
          props.history.push('/login')
        }
      })

    }

    return (
      
      <div style={{
        display:'flex', justifyContent: 'center', alignItems: ' center',
        width:'100%',height:'100vh'
      }}>

        <form style={{display:'flex', flexDirection:'column'}}
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

          <button type = "submit">
            register
          </button>
          <button type = "submit">
            login
          </button>


        </form>
        
        </div>
      );
  }

  export default withRouter(RegisterPage)