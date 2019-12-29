import React from 'react'
import {Link} from 'react-router-dom'
var findpage1css = require('./findpage1.css')
export default class register extends React.Component{
    render(){
        return(
            <div className={findpage1css.login}>
                <div>
                <div className={findpage1css.loginheader}>

                    密码设置

                </div>
                <div className={findpage1css.loginheader1}>
                <table className={findpage1css.biaoge} >
                <p><input type="text" name="username" placeholder="新密码" className={findpage1css.tg}></input></p>
                <p><input type="text" name="password" placeholder="确认密码" className={findpage1css.tg}></input></p>
                <div className={findpage1css.wan}><Link to='/login'><button className={findpage1css.wancheng} type="button">完成</button></Link></div>
                
                </table>
                </div>
                </div>
            </div>
        )
    }
}