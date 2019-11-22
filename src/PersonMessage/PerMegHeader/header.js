import React from "react";
import { Icon ,Avatar} from "antd";
import {Link,Route} from 'react-router-dom';
import Review from './../../Review/review'
var HeaderCss = require("./header.css")

export default class Header extends React.Component {
    render() {
        return (
            <div ><Route path='/header' exact>
                <div>
                    <div className={HeaderCss.header}>
                        <div className={HeaderCss.headleft}>
                        <Avatar size={130} style={{ backgroundColor: '#87d068' }} icon="user" />
                        <p>大大鲜花</p>
                        </div>
                        <div className={HeaderCss.headright}>
                            <div className={HeaderCss.headtop}>
                                <span>我的订单</span>
                                <Icon type="eye" theme="twoTone" style={{fontSize:"30px"}}/>
                            </div>
                            <div className={HeaderCss.headbtm1}>
                                <p><b>10</b></p> <p><b>0</b></p> <p><b>0</b></p>
                            </div>
                            <div className={HeaderCss.headbtm2}>
                                <p>积分</p> <p>优惠券</p> <p>余额</p> 
                            </div>
                            <div className={HeaderCss.headbtm3}>
                                <Link to="/header/review">赚取积分</Link><a>领取券</a><a><Link to="./../recharge">充值</Link></a>
                            </div>
                        </div>
                    </div>

                    

                </div>
                </Route>
                <Route path="/header/review" Component={Review}></Route>
            </div>
        )
    }
}