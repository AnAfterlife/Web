import React from 'react';
import { Link } from 'react-router-dom';
import {Spin} from 'antd'
var HeaderCss = require('./header.css');

export default class Header extends React.Component{
    render(){
        return(
        <div className={HeaderCss.header}>
            <div className={Header.toparea1}>
                    <div className={HeaderCss.toparea4}>
                        <div className={HeaderCss.toparea5}>
                <div className={HeaderCss.toparea2}>
                   <a href="/">客服服务 </a>
                   <spin>|</spin>
                  <a href="/">返回首页</a>
                    </div>
                    
                    <div className={HeaderCss.toparea3}>
                        <ul>
                           <li> <Link to='/login'>注册</Link></li> 
                           <li>  <Link to='/RegisterPage'>立即登录</Link></li> 
                           <li>  <Link to='/wallet'>我的信息</Link></li> 
                           <li>  <Link to='/PersonMessage/permeg'>我的订单</Link></li> 
                           <li>  <Link to='/'>购物车</Link></li>
                           </ul>
                           </div>
                    </div>
                    </div>
                    </div>
            </div>
   
        )
}
}