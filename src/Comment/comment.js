import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import { Avatar,Icon,Button, message } from 'antd';
import logo from "../img/pt1.png"
import HyperTextInput from '../HyperTextInput/enjoy';
var Merchant = require('./comment.css')
export default class Merchant1 extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload = ()=>{
        var xhr = new XMLHttpRequest()
        var date={
            "comment":this.state.comment,
        }
        xhr.open("post","/comment/save")
        xhr.onreadystatechange=function(params){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    message.info(xhr.responseText)
                    console.log(xhr.responseText)
                    var result = JSON.parse(xhr.responseText)
                    if(result.state==2){
                        message.info("评论成功")
                    }else if(result.sta1==1){}
                }else{
                    message.info(xhr.status)
                }
            }
        }
        xhr.setRequestHeader('content-type','application/json')
        xhr.send(JSON.stringify(date))
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
                                <span className={Merchant.span} title="校园客服">评论区</span>
                                <i className={Merchant.i}>卖家名</i>
                                <span className={Merchant.span1}><Link to="/homepage1"  className={Merchant.close}><Icon type="close" size={8} /></Link></span>
                                <p className={Merchant.p}>系统消息</p>
                            </div>
                        </div>
                    </div>
                    <div className={Merchant.totalpage5}>
                    <div className={Merchant.header3}>
                   <div className={Merchant.self1}>自营</div><div className={Merchant.p2}>评论 </div>
                    </div>
                    <div className={Merchant.header4}>评论内容</div>
                    <div className={Merchant.header6}>
                        <div className={Merchant.header7}>
                            <div className={Merchant.header8}><Icon type="smile" style={{ fontSize: '30px', color: '#08c' }} /></div>
                            <div className={Merchant.header8}><Icon type="picture" style={{ fontSize: '30px', color: '#08c' }}/></div>
                            <div className={Merchant.header8}><Icon type="camera" style={{ fontSize: '30px', color: '#08c' }}/></div>
                            <div className={Merchant.header8}><Icon type="heart" style={{ fontSize: '30px', color: '#08c' }} /></div>
                            <div className={Merchant.header8}><Icon type="audio" style={{ fontSize: '30px', color: '#08c' }} /></div>
                            <div className={Merchant.header9}><Button type="primary" onClick={this.upload}>发送</Button></div>
                            <div className={Merchant.textarea}><textarea rows="6.7" cols="110"  maxlength="50" name="comment"color="pink" value={this.state.comment} onChange={e=>this.changeValue(e)}>请输入您评价</textarea></div>
                            
                           </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}