import React,{ useState} from 'react'
import Axios from 'axios'
import{withRouter }from 'react-router-dom'



function Menuselect(props) {

    const payment =(event)=>{
      event.preventDefault();

      var sb = document.getElementById("menu")

      var menu;

      if(sb.value==='f'){
        
        var coffie = document.getElementById("커피")
        var wine = document.getElementById("와인")
        var salad = document.getElementById("샐러드")
        var meat = document.getElementById("고기")
        var isvalentine=document.getElementById("isValentine")
        var isval 

        if(isvalentine.options[isvalentine.selectedIndex].value==='valentine'){
          isval = true;
        }else{
          isval = false;
        }
        
        menu = {
          menuName : 'French',
          coffie : coffie.value,
          wine   : wine.value,
          salad  : salad.value,
          meat   : meat.value,
          isvalentine : isval

        }
        

      }else if(sb.value==='e'){
      
        var eggscramble = document.getElementById("에그 스크램블")
        var bacon = document.getElementById("베이컨")
        var bread = document.getElementById("빵")
        var steak = document.getElementById("스테이크")
        var isvalentine=document.getElementById("isValentine")
        var isval 

        if(isvalentine.options[isvalentine.selectedIndex].value==='valentine'){
          isval = true;
        }else{
          isval = false;
        }
        
        menu = {
          menuName : 'English',
          eggscramble : eggscramble.value,
          bacon   : bacon.value,
          bread  : bread.value,
          steak   : steak.value,
          isvalentine : isval

        }
        

      }else if(sb.value==='c'){
        
        var champagne = document.getElementById("샴페인")
        var baguette = document.getElementById("바게트빵x4")
        var coffie_one_port = document.getElementById("커피 한 포트")
        var isvalentine=document.getElementById("isValentine")
        var isval 

        if(isvalentine.options[isvalentine.selectedIndex].value==='valentine'){
          isval = true;
        }else{
          isval = false;
        }
        
        menu = {
          menuName : 'Champagne',
          champagne : champagne.value,
          baguette   : baguette.value,
          coffie_one_port  : coffie_one_port.value,
          isvalentine : isval

        }
        
      }
      
      //var win = window.open("./paymentPage.js","결제 창","width=500,height=500,top=100,left=200,location=no")
      //win.document.write("<title>"+title+"</title>")
      


      Axios.post('/api/user/order',menu)
      .then(function(response){
        if(response.data.menusave===true){
          alert('주문 성공')
          props.history.push('/order')
        }else{
          alert('주문 실패')
        }
      })









      props.history.push('/order')
   }

   const ReturnHandler=(event)=>{
    event.preventDefault();

  

    props.history.push('/order')
   }


    const onChangeHandler =(event)=>{
    
      event.preventDefault();

      var good_a = ['큐피트 접시','냅킨'];
      var good_b = ['커피','와인','샐러드','고기'];
      var good_c = ['에그 스크램블','베이컨','빵','스테이크'];
      var good_d = ['샴페인','바게트빵x4','커피 한 포트'];

      var menu =document.getElementById('menu');
      var target=document.getElementById('div');

      console.log(menu.value)
     

      if(menu.value==='f') var d = good_b
      else if(menu.value==='e') var d = good_c
      else if(menu.value==='c') var d = good_d

      
      target.innerHTML='';

      for(var x in d){

        var menus=document.createElement("select");
        menus.setAttribute("id",d[x])

        menus.options.length=0;

        var smallmenu = document.createElement('h1');
        var smtext=document.createTextNode(d[x]);

        smallmenu.appendChild(smtext);


        for(var i =0;i<5;i++){

          var opt=document.createElement("option");
          opt.value=i;
          opt.text=i;
          
          menus.appendChild(opt)
        }
        
        target.appendChild(smallmenu);
        target.appendChild(menus);
      }
    

    }

    const onSubmitHandler = (event)=>{
      event.preventDefault();
      
    

      Axios.post('/api/user/login')
      .then(function(response){
        console.log(response)
      })

    }
    

    return (
      
      <div style={{
        display:'flex', justifyContent: 'center', alignItems: ' center',
        width:'100%',height:'100vh'
      }}>

        <form style={{display:'flex', flexDirection:'column'}}
          
        >
          <select id = "menu" onChange={onChangeHandler}>
            <option value='none'>메뉴를 고르세요</option>
            <option value='f'>French</option>
            <option value='e'>English</option>
            <option value='c'>Champagne</option>
          </select>
          <select id = "isValentine">
            <option value='none'>none</option>
            <option value='valentine'>Valentine</option>
          </select>
          
          <div id='div'>
            
          </div>
          
            
      
            <button onClick={payment}>결제하기</button>
            <button onClick={ReturnHandler}>돌아가기</button>

         


        </form>
        
        </div>
      );
  }

  export default withRouter(Menuselect)