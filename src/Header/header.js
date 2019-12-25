import React from 'react';
import { Link } from 'react-router-dom';
import {Spin} from 'antd'

var HeaderCss = require('./header.css');

export default class Header extends React.Component{
    render(){
        return(
        <div className={HeaderCss.header}>
          <div className={HeaderCss.all}>
                <div className={HeaderCss.one}>
                 <a href="/merchant">客服服务</a>
                   <spin>|</spin>
                  <a href="/">返回首页</a> 
                    </div>
                    
                    <div className={HeaderCss.two}>
                        
                        <a href='/login'>立即登录</a>
                        <a href='/RegisterPage'>注册</a>   
                            <a href='/wallet'>我的信息</a>
                            <a href='/PersonMessage/permeg'>我的订单</a>
                            <a href='/'>购物车</a>
                            
                          
                          
                           </div>
                           </div>
                    </div>
                  
        )
}
}