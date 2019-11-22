import React from 'react'
import {Link} from 'react-router-dom'
var findpagecss = require('./findpage.css')

export default class register extends React.Component {
    render() {
        return (
            <div className={findpagecss.login}>
                <div>
                <div className={findpagecss.loginheader}>
                    找回密码
                </div>
                <div className={findpagecss.loginheader1}>
                <table className={findpagecss.biaoge}>
                    <p><input type="text" name="username" placeholder="用户名" className={findpagecss.tg}></input></p>
                    <p><input type="text" name="password" placeholder="邮箱" className={findpagecss.tg}></input></p>
                    <p><input type="text" name="password" placeholder="验证码" className={findpagecss.tg1}></input><Link to='/findpage1'><button className={findpagecss.tijiao} type="button"  >提交</button></Link> </p>
                    
                </table>
                </div>
                </div>
            </div>
        )
    }
}