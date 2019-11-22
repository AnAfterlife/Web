import React from 'react';
import { Link } from 'react-router-dom';

var HeaderCss = require('./header.css');

export default class Header extends React.Component{
    render(){
        return(
        <div className={HeaderCss.header}>
            <div className={HeaderCss.left}>
            hi,欢迎来到校园服务平台，祝你天天都有好心情！
       
            <div className={HeaderCss.right}>
            <Link to="/homePage">登录</Link>
            <span>|</span>
            <Link to="/login" >注册 </Link>
                    </div>
                </div>
            </div>
   
        )
}
}