import React from 'react';

import photo from '../img/user.png'
import {Menu,Dropdown,Icon} from 'antd'

var HeaderCss = require('./header.css');

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:window.localStorage.getItem("username")
        }
    }
    logout=e=>{
        window.localStorage.removeItem("username")
        window.localStorage.removeItem("token")
        this.setState({
            username:null
        })
    }
    render(){
        const menu = (
            <Menu>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer">
                
              </a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer">
               
              </a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer">
              <span onClick={this.logout}>  退出登录</span>
              </a>
            </Menu.Item>
          </Menu>
        
        )
            let userProfile=null;
           
           
            if(this.state.username!=null){
        
                    userProfile =<div>
                        <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          {this.state.username}
           <Icon type="down" />
        </a>
      </Dropdown>
                       
                    </div>
            }else{
                userProfile=<a>立即登录</a>
            }
        return(
         
        
           <div className={HeaderCss.header} >
          
         <div className={HeaderCss.one}>
         <a href="/">返回首页</a>
         <span>|</span>
         <a href="/merchant">客服服务 </a>
    
         
           
              <div className={HeaderCss.two}>
                        <div className={HeaderCss.all}>
                     <div className={HeaderCss.a}>  <a >立即登录 <div className={HeaderCss.a1}><div className={HeaderCss.login}><a href="/login"className={HeaderCss.btn}>请登录</a><a href="/findpage" className={HeaderCss.btn} >找回密码</a></div></div></a></div>
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