import React from 'react';
import { Button, Input } from 'antd';
import { Avatar } from 'antd';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
const { Search } = Input;
var GoodsCss = require('./goods.css');

class Menuspage extends React.Component {
    render() {
        return (

            <div>
                <div className={GoodsCss.header}>
                    <div className={GoodsCss.logo}>
                        <div className={GoodsCss.logo1}></div>
                        <div className={GoodsCss.text}>跳蚤优品</div>
                    </div>
                    <div className={GoodsCss.search}>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                    </div>
                </div>
                <div className={GoodsCss.choose}>
                    <h>亲，你是不是想找：</h>
                    <h>|华为手机</h>
                    <h>|小米手机</h>
                    <h>|苹果手机</h>
                    <h>|oppo手机</h>
                    <h>|vivo手机</h>
                    <h>|华为电脑</h>
                    <h>|华硕电脑</h>
                    <h>|戴尔电脑</h>
                    <h>|手表</h>
                </div>
            </div>
        )
    }
}
export default Menuspage;
