import React from 'react'
import {Link} from 'react-router-dom'
import { Button,Input,message} from 'antd';
var findpagecss = require('./findpage.css')

export default class findpage extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
   this.setState({
       [e.target.name]:e.target.value
   })
    }   
   // 模拟后台数据
    // getAlterpasswordList(){
    //     let dataList[{
    //         stuID:"11",
    //         password:"222",

    //     }]
    //     return dataList;
    // } 
    
    findpage =()=>{
     
        var xhr = new XMLHttpRequest()
        var data={
            "stuID":this.state.stuID,
            "password":this.state.password, 
            "newpassword":this.state.newpassword,
            "newpassword1":this.state.newpassword1
        }
        xhr.open("post","/user/alterpassword")

        xhr.onreadystatechange=function (){
            if (xhr.readyState==4){
                if(xhr.status==-1){
                    console.log("请输入用户名!")
                }else if(xhr.status==-2){
                    console.log("请输入旧密码!")
                }else if(xhr.status==-3){
                    console.log("请输入新密码!")
                }else if(xhr.status==1){
                    console.log("修改成功！")
                }else if(xhr.status==2){
                    console.log("修改失败，该用户名不存在!")
                }else if(xhr.status==3){
                    console.log("修改失败，旧密码错误!")
                }else if(xhr.status==4){
                    console.log("修改失败，旧密码与新密码一致!")
                }
            }
        }
        // 判断语句
        // xhr.onreadystatechange=function () {
            // if(xhr.readyState==4){
        //     if (this.state.stuID!=this.state.password) {
        //         console.log("原密码错误！")
        //     } else if(this.state.newpassword!=this.state.newpassword1){
        //         console.log("两次密码不一样！")
        //     }else if(this.state.newpassword==this.state.password){
        //         console.log("与原密码相同！")
        //     }else{
        //         console.log("修改成功！")
        //     }
        // }
            // }
        xhr.setRequestHeader('content-type','application/json');
        xhr.send(JSON.stringify(data))
       
    }
    render() {
        return (
            <div className={findpagecss.login}>
                <div>
                <div className={findpagecss.loginheader}>
                    找回密码
                </div>
                <div className={findpagecss.loginheader1}>
                <table className={findpagecss.biaoge}>
                    <p><input type="text" name="stuID" placeholder="学号" className={findpagecss.tg} value={this.state.stuID} onChange={e=>this.changeValue(e)}></input></p>
                    <p><Input.Password type="text" name="password" placeholder="旧密码" className={findpagecss.tg} value={this.state.password} onChange={e=>this.changeValue(e)}></Input.Password></p>
                    <p><Input.Password type="text" name="newpassword" placeholder="新密码" className={findpagecss.tg} value={this.state.newpassword} onChange={e=>this.changeValue(e)}></Input.Password></p>
                    <p><Input.Password type="text" name="newpassword1" placeholder="确认密码" className={findpagecss.tg} value={this.state.newpassword1} onChange={e=>this.changeValue(e)}></Input.Password></p>
                    <p><Link to='/login'><Button className={findpagecss.tijiao} type="button" onClick={this.findpage}  >提交</Button></Link> </p> 
                </table>
                </div>
                </div>
            </div>
        )
    }
}