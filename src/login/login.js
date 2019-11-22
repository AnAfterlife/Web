import React from 'react'
import { Button } from 'antd';
import{Link} from 'react-router-dom';
var logincss = require('./login.css')

export default class Login extends React.Component{

    render(){

        return(
            <div className={logincss.login}>
                <div>
                <div className={logincss.loginheader}>

                    校园服务系统注册

                </div>
                <div className={logincss.loginheader1}>
                <table className={logincss.biaoge} >
                <p><input type="text" name="username" placeholder="用户名" className={logincss.tg}></input></p>
                <p><input type="text" name="password" placeholder="密码" className={logincss.tg}></input></p>
                <p><input type="text" name="password" placeholder="确认密码"className={logincss.tg}></input></p>
                <p><input type="text" name="email" placeholder="邮箱"className={logincss.tg}></input></p>
                <p><Link to='/RegisterPage'><Button className={logincss.submit} type="button" >注册</Button></Link><span><input type="checkbox" onClick= ""></input><lable className={logincss.checkbox}>我已阅读并同意相关条款</lable></span></p>
                </table>
                </div>
                </div>
            </div>
        )
    }
}