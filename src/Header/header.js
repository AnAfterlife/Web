import React from 'react';
import { Link } from 'react-router-dom';
import {Spin,Row,Col} from 'antd'
import photo from '../img/user.png'

var HeaderCss = require('./header.css');

export default class Header extends React.Component{
    render(){
        return(
         
        
           <div className={HeaderCss.header} >
          
         <div className={HeaderCss.one}>
         <a href="/">返回首页</a>
         <span>|</span>
         <a href="/merchant">客服服务 </a>
      
         
        
       
         
           
              <div className={HeaderCss.two}>
                        <div className={HeaderCss.all}>
                     <div className={HeaderCss.a}>  <a >立即登录 <div className={HeaderCss.a1}><div className={HeaderCss.login}><div className={HeaderCss.loginlogo}><img src={photo} width='30px' height='30px' /></div><div className={HeaderCss.btn}><a href="/login" >请登录</a></div><div className={HeaderCss.btn}><a href="/RegisterPage">找回密码</a></div></div></div> </a></div>
                     <div className={HeaderCss.b}>  <a href='/RegisterPage'>注册</a>   </div>
                     <div className={HeaderCss.c}>  <a href='/wallet'>我的信息</a></div>
                     <div className={HeaderCss.d}>  <a href='/PersonMessage/permeg'>我的订单</a></div>
                     <div className={HeaderCss.e}>    <a href='/'>购物车</a></div>
                     </div>  
              </div>
              
          </div>
          
                  </div>  
         
        )
}
}