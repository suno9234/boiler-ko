import React,{ useState} from 'react'
import Axios from 'axios'
import{withRouter }from 'react-router-dom'

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
      
      <div style={{
        display:'flex', justifyContent: 'center', alignItems: ' center',
        width:'100%',height:'100vh'
      }}>

        <form style={{display:'flex', flexDirection:'column'}}
          onSubmit={onSubmitHandler}
        >
          <label>id</label>
          <input type="text"value={Id} onChange={onIdHandler}/>
          <label>password</label>
          <input type ="password" value={Password} onChange={onPwdHandler}/>
          <br/>
          <button onClick={RegisterHandler}>
            register
          </button>
          <button type = "submit">
            login
          </button>


        </form>
        
        </div>
      );
  }

  export default withRouter(LoginPage)