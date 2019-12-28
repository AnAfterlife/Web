import React from 'react'
import LunBoTu from '../LunBoTu1/lunbotu1'
import HomePage from '../HomePage1/homepage1'
import {Link} from 'react-router-dom'
import {Icon, Button} from 'antd'
import picture1 from '../img/pt1.png'
var logincss = require('./login.css')


export default class login extends React.Component{
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
               <div className={logincss.warp}>
                    <div className={logincss.wpn}>
                        <div className={logincss.formtop}>
                            <a href><img src={picture1} className={logincss.headlogo}></img></a>
                          <div className={logincss.form}>                        
                                <p>用户名：<input prefix={<Icon type="user" ></Icon>} type="text" name="username" placeholder="大头" value={this.state.username} onChange={e=>this.changeValue(e)}  className={logincss.tg}></input></p>
                                <p>密码：<input type="text" name="password" placeholder="1234567" className={logincss.tg} prefix={<Icon type="unlock"  />}  value={this.state.password} onChange={e=>this.changeValue(e)}></input></p>
                             <div className={logincss.buttom}>
                                <p className={logincss.left}><Link to="/RegisterPage">账号注册</Link></p>
                                <p className={logincss.right}><Link to="/findpage">密码找回</Link></p>              
                                    <div className={logincss.last}>
                                        {/* <Button onClick={}>登录</Button> */}
                                    <Link to='/homepage1'><input className={logincss.submit} type="submit" value="登录"></input></Link><span><input type="checkbox" onClick= ""></input><lable className={logincss.checkbox}>我已阅读并同意相关条款</lable></span>
                                         </div>
                                    </div>
                              </div>  
                        </div>
                    </div>
                </div>

        )
    }
}