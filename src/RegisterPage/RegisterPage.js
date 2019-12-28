import React from 'react'
<<<<<<< HEAD
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
=======
import { Button, Input, message } from 'antd';

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
        
>>>>>>> 06d1d851e83c3a191ba9a6ac556ead7b28611b8e
    }
    render(){

        return(
            <div className={RegisterPagecss.register}>
                <div>
                <div className={RegisterPagecss.registerheader}>
<<<<<<< HEAD
                    校园服务系统注册
=======

                    购物系统注册

>>>>>>> 06d1d851e83c3a191ba9a6ac556ead7b28611b8e
                </div>
               
                <div className={RegisterPagecss.registerheader1}>
<<<<<<< HEAD
          
            

      
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
           
=======
                <table className={RegisterPagecss.biaoge} >
                <p><Input type="text" name="stuID" placeholder="学号" className={RegisterPagecss.tg} value={this.state.stuID} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="username" name="username" placeholder="姓名" className={RegisterPagecss.tg} value={this.state.username} onChange={e=>this.changeValue(e)}/></p>
                
                <p><Input type="password" name="password" placeholder="密码" className={RegisterPagecss.tg} value={this.state.password} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="pass" name="pass" placeholder="确认密码"className={RegisterPagecss.tg} value={this.state.pass} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="text" name="email" placeholder="邮箱"className={RegisterPagecss.tg} value={this.state.email} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="age" name="age" placeholder="年龄"className={RegisterPagecss.tg} value={this.state.age} onChange={e=>this.changeValue(e)}/></p>
                <p><Input type="gender" name="gender" placeholder="性别"className={RegisterPagecss.tg} value={this.state.gender} onChange={e=>this.changeValue(e)}/></p>

                <p><Button  onClick={this.upload()}  className={RegisterPagecss.submit}>注册</Button><span><input type="checkbox" onClick= ""></input>es<lable className={RegisterPagecss.checkbox}>我已阅读并同意相关条款</lable></span></p>
                </table>
>>>>>>> 06d1d851e83c3a191ba9a6ac556ead7b28611b8e
                </div>
                </div>
            </div>
        )
    }
}