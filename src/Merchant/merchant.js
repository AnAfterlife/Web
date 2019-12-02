import React from 'react'
import { Avatar,Icon,Button } from 'antd';
var Merchant = require('./merchant.css')
export default class Merchant1 extends React.Component{
    render(){
        return(
            <div className={Merchant.totalpage}>
                <div className={Merchant.totalpage1}>
                    <div className={Merchant.header}>
                        <div className={Merchant.header1}><Avatar shape="shape" style={{ backgroundColor: 'pink' }} size={64} icon="user" />用户名</div>
                        <div className={Merchant.header2}>商家1</div>
                        <div className={Merchant.header2}>商家2</div>
                        <div className={Merchant.header2}>商家3</div>
                    </div>
                    <div className={Merchant.totalpage5}>
                    <div className={Merchant.header3}>商家名</div>
                    <div className={Merchant.header4}>聊天内容</div>
                    <div className={Merchant.header6}>
                        <div className={Merchant.header7}>
                            <div className={Merchant.header8}><Icon type="smile" style={{ fontSize: '30px', color: '#08c' }} /></div>
                            <div className={Merchant.header8}><Icon type="picture" style={{ fontSize: '30px', color: '#08c' }}/></div>
                            <div className={Merchant.header8}><Icon type="camera" style={{ fontSize: '30px', color: '#08c' }}/></div>
                            <div className={Merchant.header8}><Icon type="heart" style={{ fontSize: '30px', color: '#08c' }} /></div>
                            <div className={Merchant.header8}><Icon type="audio" style={{ fontSize: '30px', color: '#08c' }} /></div>
                            <div className={Merchant.header9}><Button type="primary">发送</Button></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}