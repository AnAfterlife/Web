import React from 'react';
import { Link } from 'react-router-dom';
import img from './../img/logo.png';
import { Row, Col } from 'antd';
var BodyCss = require('./body.css');

export default class Body extends React.Component{
    render(){
        return(
            <div className={BodyCss.w}>
                <div className={BodyCss.x}>
                    <Link className={BodyCss.logo} to="/homepage"> <img src={img} alt=""></img></Link>
                </div>
                <div className={BodyCss.y}>
                    <u1 id="shelpter"  ></u1>
                    <div className={BodyCss.form}>
                        <input type="text" onKeyDown="javascript:if(event.keyCode==13) search('key');" autoComplete="off" accessKey="s" className={BodyCss.text} placeholder="兼职"></input>
                        <button onclick="search('key');return false;" className={BodyCss.button}></button>
                    </div>
                </div>
                <div className={BodyCss.z}>
                <div className={BodyCss.icon}>
                    <i className={BodyCss.left}></i>
                    <i className={BodyCss.right}>&gt;</i>
                    <Link to="">个人中心 </Link>
                    <Link to="">我的钱包</Link>
                </div>
                </div>
                <div className={BodyCss.c}>
                        <div className={BodyCss.c1}>                                         
                            <div className={BodyCss.c2}>
                                主要功能
                            </div>
                            <div className={BodyCss.c6}>
                                <a className={BodyCss.c9}><Link to="">服务中心</Link></a>
                                <a className={BodyCss.c9}><Link to="">订单</Link></a>
                                <a className={BodyCss.c9}><Link to="">钱包</Link></a>
                                <a className={BodyCss.c9}><Link to="">发布</Link></a>
                                </div>
                            </div>
                     </div>
            </div>
        )
    }
}