import React from 'react'
import {Link} from 'react-router-dom'
import { Button,message} from 'antd';
var findpage1css = require('./findpage1.css')
export default class register extends React.Component{
    // 清除数据
    constructor(props){
        super(props);
        this.state={
         
        }
    }
    changePassword=(h)=>{
        this.setState({
            [h.target.name]:h.target.password
        })
         }
    //提交方法    
    upload =()=>{
        //1,创建对象
        var xhr ;
        //接口数据
        var data={
            "username":this.status.username,
            "password":this.status.password
        }
        //2,打开链接,与后台数据路径不匹配暂时未写路径
        xhr.open("post","/user/findpage1",true)
        //3，配置相应函数 ==4代表已经成功接收到数据 200==success
        xhr.onreadystatechange=function name(params) {
            if(xhr.readyState==4){
                if(xhr.status==200){
                    message.info(xhr.responseText)
                    console.log(xhr.responseText)
                }else{
                    message.info(xhr.status)
                }
            }
        }
        //4,发送数据
        xhr.send(data)
 
 
 
 
    }     
 findpage1=h=>{
            if(this.state.username=='123'&&this.state.password=='123'){
                alert('修改错误,前后密码一致');
                 
                window.localStorage.setItem("username","ha")
               window.localStorage.setItem("token","11111")
                this.props.history.push('/homepage1')
                }else{
                    alert('登录失败');
                }
         }




    render(){
        return(
            <div className={findpage1css.login}>
                <div>
                <div className={findpage1css.loginheader}>

                    密码设置

                </div>
                <div className={findpage1css.loginheader1}>
                <table className={findpage1css.biaoge} >
                <p><input type="text" name="username" placeholder="新密码" className={findpage1css.tg} password={this.state.username} onChange={h=>this.changePassword(h)}></input></p>
                <p><input type="text" name="password" placeholder="确认密码" className={findpage1css.tg} password={this.state.password} onChange={h=>this.changePassword(h)}></input></p>
                <div className={findpage1css.wan}><Link to='/login'><Button className={findpage1css.wancheng} type="button" onClick={this.upload}>完成</Button></Link></div>
                
                </table>
                </div>
                </div>
            </div>
        )
    }
}