import React from 'react'
import { Button, Input, message } from 'antd';

var RegisterPagecss= require('./RegisterPage.css')

export default class RegisterPage extends React.Component{
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
    upload =()=>{
        //XHR
        //open连接
        //配置响应函数
        //发送数据
      
            
        var xhr = new XMLHttpRequest()
        var data={
            "stuID":this.state.stuID,
            "username":this.state.username,
            "password":this.state.password,
            
            "email":this.state.email,
            "age":this.state.age

        }
        xhr.open("post","/user/register")

        xhr.onreadystatechange=function () {
            if(xhr.readyState==4){
                if(xhr.status==200){
            
                console.log(xhr.responseText)
                var result = JSON.parse(xhr.responseText) 
                if(result.state==2){
                    message.info("用户已存在")
                }else if(result.state==1){
                  message.info("注册成功")
                  this.props.history.push("/homepage")
                }else if(result.state==3){
                  message.info("密码不一致")
                }
               
                }else{
                    message.info(xhr.status)
                }
            }
            
        }
        xhr.setRequestHeader('content-type','application/json');
        xhr.send(JSON.stringify(data))
        
    }
    render(){

        return(
            <div className={RegisterPagecss.register}>
                <div>
                <div className={RegisterPagecss.registerheader}>

                    购物系统注册

                </div>
               
                <div className={RegisterPagecss.registerheader1}>
                <table className={RegisterPagecss.biaoge} >
                <p><Input type="text" name="stuID" placeholder="学号" className={RegisterPagecss.tg} value={this.state.stuID} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="username" name="username" placeholder="姓名" className={RegisterPagecss.tg} value={this.state.username} onChange={e=>this.changeValue(e)}/></p>
                
                <p><Input type="password" name="password" placeholder="密码" className={RegisterPagecss.tg} value={this.state.password} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="pass" name="pass" placeholder="确认密码"className={RegisterPagecss.tg} value={this.state.pass} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="text" name="email" placeholder="邮箱"className={RegisterPagecss.tg} value={this.state.email} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="age" name="age" placeholder="年龄"className={RegisterPagecss.tg} value={this.state.age} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="gender" name="gender" placeholder="性别"className={RegisterPagecss.tg} value={this.state.gender} onChange={e=>this.changeValue(e)}/></p>

                <p><Button  onClick={this.upload()}  className={RegisterPagecss.submit}>注册</Button><span><input type="checkbox" onClick= ""></input><lable className={RegisterPagecss.checkbox}>我已阅读并同意相关条款</lable></span></p>
                </table>
                </div>
                </div>
            </div>
        )
    }
}