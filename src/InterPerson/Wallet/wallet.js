import React from "react";
import { Input, Button,Radio, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
const InputGroup = Input.Group;
const { Option } = Select;
const { TextArea } = Input;

var WalletCss = require("./wallet.css")



export default class Wallet extends React.Component {

    render() {
        return (
            <div className={WalletCss.total}>
                <div className={WalletCss.intotal}>
                <div className={WalletCss.module}><label>用户名：</label><Input placeholder="请输入你的用户名" /></div>
                <div className={WalletCss.module}><label>密码：</label><Input placeholder="请输入你的密码" /></div>
                <div className={WalletCss.module}><label>性别：</label><Radio>男</Radio><Radio>女</Radio><Radio>保密</Radio></div>
                <div className={WalletCss.module}><label>生日：</label>
                    <InputGroup compact>
                        <Select defaultValue="1999">
                            <Option value="2002">2002</Option>
                            <Option value="2001">2001</Option>
                            <Option value="2000">2000</Option>
                            <Option value="1999">1999</Option>
                            <Option value="1998">1998</Option>
                            <Option value="1997">1997</Option>
                            <Option value="1996">1996</Option>
                            <Option value="1995">1995</Option>
                            <Option value="1994">1994</Option>
                            <Option value="1993">1993</Option>
                        </Select>
                    年
                
                        <Select defaultValue="1">
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                            <Option value="9">9</Option>
                            <Option value="10">10</Option>
                            <Option value="11">11</Option>
                            <Option value="12">12</Option>
                        </Select>
                    月
                    
                        <Select defaultValue="1">
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                            <Option value="9">9</Option>
                            <Option value="10">10</Option>
                            <Option value="11">11</Option>
                            <Option value="12">12</Option>
                        </Select>
                        天
                    </InputGroup></div>

                    <div className={WalletCss.module}><label>邮箱：</label><Input placeholder="请输入你的邮箱" /></div>
                    <div className={WalletCss.module}>  <label>你的收货地址:</label><InputGroup compact>
                        <Select defaultValue="西南交通大学希望学院">
                            <Option value="西南交通大学希望学院">西南交通大学希望学院</Option>
                            <Option value="成都文理学院">成都文理学院</Option>
                            <Option value="五月花学校">五月花学校</Option>
                            <Option value="西南航空职业学校">西南航空职业学校</Option>
                            
                        </Select>
                    </InputGroup></div>
                    <div className={WalletCss.di}>详细地址:<TextArea rows={5} placeholder="请详细填写地址，精确到宿舍楼几栋，如1栋1459" /></div>
                    <div className={WalletCss.bb}><Button type="primary" shape="round" size="large">提交</Button></div>
                    </div>
            </div>
        )
    }
}