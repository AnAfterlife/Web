import React from 'react'
import { Button ,Input,message} from 'antd';
import{Link} from 'react-router-dom';
var RegisterPagecss= require('./RegisterPage.css')

export default class RegisterPage extends React.Component{
    //声明state
     constructor(props){
      super(props)//初始化
      this.state={}
}
//修改state的值
changeValue=(e)=>{
this.setState({
    [e.target.name]:e.target.value
})
}
rst=()=>{
    //XHR
    var xhr = new XMLHttpRequest()//设置对象
    var data={
        "stuId":this.state.stuId,
        "username":this.state.username,
        "password":this.state.password,
       "email":this.state.email,
       "age":this.state.age,
       "gender":this.state.gender
    }
    //open连接
    xhr.open("post","/user/register")
    //配置响应函数
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
           
            console.log(xhr.responseText)
            var result = JSON.parse(xhr.responseText)//转换成前端对象 用JSON
            if(result.state==2){
                message.info("用户名已存在")
            }else if(result.state==1){
                message.info("注册成功")
                this.props.history.push("/homepage1")
            }
           
            }else{
                message.info(xhr.status)
            }
        }
    }
    //发送数据
   xhr.setRequestHeader('content-type','application/json');
    xhr.send(JSON.stringify(data))
}
    render(){

        return(
            <div className={RegisterPagecss.register}>
                <div>
                <div className={RegisterPagecss.registerheader}>

                    校园服务系统注册

                </div>
                <div className={RegisterPagecss.registerheader1}>
                <table className={RegisterPagecss.biaoge} >
                <p><Input type="text" name="stuID" placeholder="学号"className={RegisterPagecss.tg} value={this.state.stuID} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="text" name="username" placeholder="用户名" className={RegisterPagecss.tg} value={this.state.username} onChange={e=>this.changeValue(e)}/></p>
                <p><Input.Password type="password" name="password" placeholder="密码" className={RegisterPagecss.tg} value={this.state.password} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="text" name="email" placeholder="邮箱"className={RegisterPagecss.tg}value={this.state.email} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="text" name="age" placeholder="年龄"className={RegisterPagecss.tg}value={this.state.age} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="gender" name="gender" placeholder="性别"className={RegisterPagecss.tg} value={this.state.gender} onChange={e=>this.changeValue(e)}/></p>
                <p><Button onClick={this.rst} className={RegisterPagecss.submit} type="button" >注册</Button><span><input type="checkbox" onClick= ""/><lable className={RegisterPagecss.checkbox}>我已阅读并同意相关条款</lable></span></p>
                </table>
                </div>
                </div>
            </div>
        )
    }
}