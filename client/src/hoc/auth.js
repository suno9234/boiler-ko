import Axios from 'axios';
import Recat, { useEffect } from 'react';

export default function(SpecifiComponent,option,adminroute=null){
    function AuthenticationCheck(props){

        useEffect(()=>{
            Axios.get('/api/user/auth').then(function(response){
                
                if(!response.data.isAuth){
                    //로그인 안함
                    if(option){ //option == true
                        alert('로그인 해 주세요')
                        props.history.push('/login')
                    }
                }else{
                    //로그인 했음
                    if(adminroute && !response.data.isAdmin){
                        //관리자페이지 들어가려할때
                        alert('관리자 전용 페이지입니다')
                        props.history.push('/logined')
                    }else{
                        //로그인한 사람이 못들어가는페이지
                        if(option===false){
                            alert('로그아웃 해 주세요')
                            props.history.push('/logined')
                        }
                    }
                }
            })
        },[])
        return <SpecifiComponent/>
    }

    return AuthenticationCheck
}

