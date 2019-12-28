import React from 'react'
import LunBoTu from '../LunBoTu1/lunbotu1'
import HomePage from '../HomePage1/homepage1'
import {Link} from 'react-router-dom'
import {Icon,Input,Menu,Dropdown} from 'antd'

var logincss = require('./login.css')

export default class login extends React.Component{
    constructor(props){
        super(props);
        this.state={
         
        }
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
         }
 login=e=>{
            if(this.state.username=='123'&&this.state.password=='123'){
                alert('登录成功');
                 
                window.localStorage.setItem("username","ha")
               window.localStorage.setItem("token","11111")
                this.props.history.push('/homepage1')
                }else{
                    alert('登录失败');
                }
         }
    render(){
      
        return(
            <div>
                <div className={logincss.login1}><LunBoTu></LunBoTu></div>
                <div className={logincss.login2}>
                    <div className={logincss.loginheader}>校园服务系统登录</div>
                    <div className={logincss.login}>
                    <table className={logincss.biaoge} >
                    <p><Input prefix={<Icon type="user" ></Icon>} type="text" name="username" placeholder="用户名" className={logincss.tg} value={this.state.username} onChange={e=>this.changeValue(e)}/></p>
                    <p><Input type="text" name="password" placeholder="密码" className={logincss.tg} prefix={<Icon type="unlock" />} value={this.state.password} onChange={e=>this.changeValue(e)}/></p>
                    <p><Input className={logincss.submit} type="submit" value="登录" onClick= {this.login}></Input><span><input type="checkbox" ></input><lable className={logincss.checkbox}>我已阅读并同意相关条款</lable></span></p>
                    
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}