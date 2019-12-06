import React from 'react'
import LunBoTu from '../LunBoTu1/lunbotu1'
import HomePage from '../HomePage1/homepage1'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
var logincss = require('./login.css')

export default class login extends React.Component{
    render(){
        return(
            <div>
                <div className={logincss.login1}><LunBoTu></LunBoTu></div>
                <div className={logincss.login2}>
                    <div className={logincss.loginheader}>校园服务系统登录</div>
                    <div className={logincss.login}>
                    <table className={logincss.biaoge} >
                    <p><input prefix={<Icon type="user" ></Icon>} type="text" name="username" placeholder="用户名" className={logincss.tg}></input></p>
                    <p><input type="text" name="password" placeholder="密码" className={logincss.tg} prefix={<Icon type="unlock" />}></input></p>
                    <p><Link to='/homepage1'><input className={logincss.submit} type="submit" value="登录"></input></Link><span><input type="checkbox" onClick= ""></input><lable className={logincss.checkbox}>我已阅读并同意相关条款</lable></span></p>
                    <p className={logincss.tg1}><Link to='/login'>登录</Link></p>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}