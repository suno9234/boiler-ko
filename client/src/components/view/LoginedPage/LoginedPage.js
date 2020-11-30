import React,{useEffect} from 'react'
import axios from 'axios'
import{withRouter }from 'react-router-dom'

function LoginedPage(props) {



  const OrderHandler=()=>{
    props.history.push('/order')
  }

  const onClickHandler=()=>{
    axios.get('/api/user/logout')
    .then(function(response){
      alert('로그아웃 완료')
      props.history.push('/')
    })
  }

  return (
      
        <div style={{
          display:'flex', justifyContent: 'center', alignItems: ' center',
          width:'100%',height:'100vh'
        }}>
          
        미스터대박디너서비스
        <button onClick={onClickHandler}>
          LogOut
        </button>
    

        <button onClick={OrderHandler}>
          Order
        </button>




        </div>
    );
}

  export default withRouter(LoginedPage)