import React,{useEffect} from 'react'
import axios from 'axios'
import{withRouter }from 'react-router-dom'

function LandingPage(props) {

  const LoginHandler=(event)=>{
    event.preventDefault();
    props.history.push('/login')
  }

  const RegisterHandler=(event)=>{
    event.preventDefault();
    props.history.push('/register')
  }

  const OrderHandler=(event)=>{
    event.preventDefault();
    props.history.push('/order')
  }

  const onClickHandler=()=>{
    axios.get('/api/user/logout')
    .then(function(response){
      alert('로그아웃 완료')
      console.log(response.data)
    })
  }

  return (
      
        <div style={{
          display:'flex', justifyContent: 'center', alignItems: ' center',
          width:'100%',height:'100vh'
        }}>
          
        미스터대박디너서비스

    

        <button onClick={LoginHandler}>
          Login
        </button>

        <button onClick={RegisterHandler}>
          Reigster
        </button>

        <button onClick={OrderHandler}>
          Order
        </button>




        </div>
    );
}

  export default withRouter(LandingPage)