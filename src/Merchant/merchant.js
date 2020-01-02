import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import { Avatar,Icon,Button,Input,message} from 'antd';
import logo from "../img/pt1.png"
import HyperTextInput from '../HyperTextInput/enjoy';
var Merchant = require('./merchant.css')
export default class Merchant1 extends React.Component{
    constructor(props){
        super(props)//初始化
        this.state={}
  }
  changeValue=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
    }
    merchant=()=>{
        var xhr = new XMLHttpRequest()
        var data={
            "chant":this.state.chant
        }
        xhr.open("post","/")
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
               
                console.log(xhr.responseText)
                var result = JSON.parse(xhr.responseText)//转换成前端对象 用JSON
                if(result.state==2){
                    message.info("发送成功")
                }else if(result.state==1){
                    message.info("发送失败")
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
            <div className={Merchant.totalpage}>
                <div className={Merchant.totalpage1}>
                    <div className={Merchant.header}>
                        <div className={Merchant.header1}><Avatar shape="shape" style={{ backgroundColor: 'pink' }} size={64} icon="user" />DNGL</div>
                        <div className={Merchant.header2}>
                            <div className={Merchant.self}><img src={logo} alt="" width={40} height={40}/></div>
                            <div className={Merchant.title}>
                                <span className={Merchant.span} title="校园客服">校园客服</span>
                                <i className={Merchant.i}>自营</i>
                                <span className={Merchant.span1}><Link to="/homepage1"  className={Merchant.close}><Icon type="close" size={8} /></Link></span>
                                <p className={Merchant.p}>系统消息</p>
                            </div>
                        </div>
                    </div>
                    <div className={Merchant.totalpage5}>
                    <div className={Merchant.header3}>
                   <div className={Merchant.self1}>自营</div><div className={Merchant.p2}>校园客服</div>
                    </div>
                    <div className={Merchant.header4}>聊天内容</div>
                    <div className={Merchant.header6}>
                        <div className={Merchant.header7}>
                            <div className={Merchant.header8}><Icon type="smile" style={{ fontSize: '30px', color: '#08c' }} /></div>
                            <div className={Merchant.header8}><Icon type="picture" style={{ fontSize: '30px', color: '#08c' }}/></div>
                            <div className={Merchant.header8}><Icon type="camera" style={{ fontSize: '30px', color: '#08c' }}/></div>
                            <div className={Merchant.header8}><Icon type="heart" style={{ fontSize: '30px', color: '#08c' }} /></div>
                            <div className={Merchant.header8}><Icon type="audio" style={{ fontSize: '30px', color: '#08c' }} /></div>
                            <div className={Merchant.header9}><Button onClick={this.merchant} type="primary">发送</Button></div>
                            <div className={Merchant.textarea}><Input type="text" name="chant"value={this.state.chant} onChange={e=>this.changeValue(e)} style={{width:'915px'},{height:'100%'}} placeholder="请输入你想说的话"></Input></div>
                            
                           </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}