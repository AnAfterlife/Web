import React from 'react'
import { Button } from 'antd';
import{Link} from 'react-router-dom';
var RegisterPagecss= require('./RegisterPage.css')

export default class RegisterPage extends React.Component{

    render(){

        return(
            <div className={RegisterPagecss.register}>
                <div>
                <div className={RegisterPagecss.registerheader}>

                    校园服务系统注册

                </div>
                <div className={RegisterPagecss.registerheader1}>
                <table className={RegisterPagecss.biaoge} >
                <p><input type="text" name="username" placeholder="用户名" className={RegisterPagecss.tg}></input></p>
                <p><input type="text" name="password" placeholder="密码" className={RegisterPagecss.tg}></input></p>
                <p><input type="text" name="password" placeholder="确认密码"className={RegisterPagecss.tg}></input></p>
                <p><input type="text" name="email" placeholder="邮箱"className={RegisterPagecss.tg}></input></p>
                <p><Link to='/RegisterPage'><Button className={RegisterPagecss.submit} type="button" >注册</Button></Link><span><input type="checkbox" onClick= ""></input><lable className={RegisterPagecss.checkbox}>我已阅读并同意相关条款</lable></span></p>
                </table>
                </div>
                </div>
            </div>
        )
    }
}