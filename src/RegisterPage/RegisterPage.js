import React from 'react'
import { Button,Input } from 'antd';
import{Link} from 'react-router-dom';




var RegisterPagecss= require('./RegisterPage.css')


export default class RegisterPage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){

        return(
            <div className={RegisterPagecss.register}>
                <div>
                <div className={RegisterPagecss.registerheader}>
                    校园服务系统注册
                </div>
               
                <div className={RegisterPagecss.registerheader1}>
          
            

      
                    <form className={RegisterPagecss.h1}>
                        <div><label>用户名： </label><input type="text" name="username" placeholder="用户名" className={RegisterPagecss.tg} value={this.state.username} onChange={e=>this.changeValue(e)}></input></div>
                        <div><label>密码：   </label><input type="text" name="password" placeholder="密码" className={RegisterPagecss.tg} value={this.state.pass}></input> </div>
                        <div><label>确认密码：<input type="text" name="password" placeholder="确认密码"className={RegisterPagecss.tg}></input></label></div>
                        <div><label>邮箱：</label><input type="text" name="email" placeholder="@qq.com"className={RegisterPagecss.tg}></input></div>
                        <div><label>姓名：</label><input type="text" name="email" placeholder="张三"className={RegisterPagecss.tg}></input></div>
                        <div><label>年龄：</label><Input type="text" name="email" placeholder="18"className={RegisterPagecss.tg}></Input></div>
                        <div><label>性别：</label><input id="man" type="radio" checked="checked" name="1" />男<input id="woman" type="radio"  name="1"/>女</div>
                        <div><p><Link to='../Homepage1'><Button className={RegisterPagecss.submit} type="button" >注册</Button></Link><span><input type="checkbox" onClick= ""></input><lable className={RegisterPagecss.checkbox}>我已阅读并同意相关条款</lable></span></p></div>
                    </form>
           
                </div>
                </div>
            </div>
        )
    }
}