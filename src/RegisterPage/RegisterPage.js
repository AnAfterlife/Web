import React from 'react'
import LunBoTu from './../LunBoTu1/lunbotu1'
import HomePage from './../HomePage1/homepage1'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
var RegisterPagecss = require('./RegisterPage.css')

export default class register extends React.Component{
    render(){
        return(
            <div>
                <div className={RegisterPagecss.login1}><LunBoTu></LunBoTu></div>
                <div className={RegisterPagecss.login2}>
                    <div className={RegisterPagecss.loginheader}>校园服务系统登录</div>
                    <div className={RegisterPagecss.login}>
                    <table className={RegisterPagecss.biaoge} >
                    <p><input prefix={<Icon type="user" ></Icon>} type="text" name="username" placeholder="用户名" className={RegisterPagecss.tg}></input></p>
                    <p><input type="text" name="password" placeholder="密码" className={RegisterPagecss.tg} prefix={<Icon type="unlock" />}></input></p>
                    <p><Link to='/homepage1'><input className={RegisterPagecss.submit} type="submit" value="登录"></input></Link><span><input type="checkbox" onClick= ""></input><lable className={RegisterPagecss.checkbox}>我已阅读并同意相关条款</lable></span></p>
                    <p className={RegisterPagecss.tg1}><Link to='/login'>立即注册</Link></p>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}