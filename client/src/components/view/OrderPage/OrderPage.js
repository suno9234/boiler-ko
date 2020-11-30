import React,{ useState} from 'react'
import Axios from 'axios'
import{withRouter }from 'react-router-dom'

function OrderPage(props) {

  

    const AddHandler =(event)=>{
      event.preventDefault();
      props.history.push('/menuselect')
    }
    const LogoutHandler=(event)=>{
      event.preventDefault();
      Axios.get('/api/user/logout')
        .then(function(response){
       alert('로그아웃 완료')
       props.history.push('/')
      })
    }

    const AdminHandler=(event)=>{
      event.preventDefault();
      props.history.push('/admin')
    }


    return (
      
      <div style={{
        display:'flex', justifyContent: 'center', alignItems: ' center',
        width:'100%',height:'100vh'
      }}>

        <form style={{display:'flex', flexDirection:'column'}}
        
        >
            <button onClick={AddHandler}>상품 추가하기</button>

            
            <button onClick={LogoutHandler}>로그아웃</button>
            <button onClick={AdminHandler}>관리자</button>


        

         


        </form>
        
        </div>
      );
  }

  export default withRouter(OrderPage)