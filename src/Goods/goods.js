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
                    <ul class="fristchoose">
                        <li><a href="" class="ch1">亲，你是不是想找:</a></li>
                        <li><a href="" class="ch1">小米手机</a></li>
                        <li><a href="" class="ch1">苹果手机</a></li>
                        <li><a href="" class="ch1">oppo手机</a></li>
                        <li><a href="" class="ch1">华为手机</a></li>
                        <li><a href="" class="ch1">华为电脑</a></li>
                        <li><a href="" class="ch1">华硕电脑</a></li>
                        <li><a href="" class="ch1">苹果电脑</a></li>
                        <li><a href="" class="ch1">戴尔电脑</a></li>
                        <li><a href="" class="ch1">手表</a></li>
                    </ul>
                </div>
                <div className={GoodsCss.product}>
                    <div className={GoodsCss.product1}></div>
                </div>
            </div>
        )
    }
}
export default Menuspage;
