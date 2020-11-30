import React,{useEffect} from 'react'
import axios from 'axios'
import{withRouter }from 'react-router-dom'

function AdminPage(props) {


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

        <button onClick={onClickHandler}>logout</button>
        </div>

        
    );
}

  export default withRouter(AdminPage)