import React,{ useState} from 'react'
import Axios from 'axios'
import{withRouter }from 'react-router-dom'


function PaymentPage(props) {

    const [Address, setadd]=useState("")
    const [Card, setcard]=useState("")

    const AddressHandler = (event)=>{
      setadd(event.currentTarget.value)
    }

    const CardHandler = (event)=>{
        setcard(event.currentTarget.value)
      }

    const AddHandler =(event)=>{
      event.preventDefault();
      props.history.push('/menuselect')
    }


    return (
      
      <div style={{
        display:'flex', justifyContent: 'center', alignItems: ' center',
        width:'100%',height:'100vh'
      }}>

        <form style={{display:'flex', flexDirection:'column'}}
        
        >
            <label>주소</label>
            <input type="text" onClick={AddressHandler}></input>

            <label>카드번호</label>
            <input type="text" onClick={CardHandler}></input>


            <input type="button"onClick={}>결제하기</input>



        </form>
        
        </div>
      );
  }

  export default withRouter(PaymentPage)