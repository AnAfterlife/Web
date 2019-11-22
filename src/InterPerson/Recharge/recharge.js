import React from "react";
import { Input, Button } from "antd";
var RechargeCss = require("./recharge.css")


export default class Recharge extends React.Component {
    render() {
        return (
            <div className={RechargeCss.total}>
                <div className={RechargeCss.intotal}>
                    <div>

                        <div className={RechargeCss.a}>
                            充值
                        </div>
                        <div className={RechargeCss.h}>
                            <label>充值账户：</label><Input placeholder="请输入你要充值的账户 " />

                        </div>
                        <div className={RechargeCss.h}>
                            <label>充值金额：</label><Input placeholder="请输入你要充值的金额" />
                        </div>
                        <div className={RechargeCss.h}>
                            <Button type="primary" shape="round" size="large">确定</Button>
                        </div>
                        <div className={RechargeCss.z} >
                            温馨提示：
                            <p>1. 充值成功后，余额可能存在延迟现象，一般1到5分钟内到账，如有问题，请咨询客服；</p>
                           <p> 2. 充值金额输入值必须是不小于10且不大于50000的正整数；</p>
                            <p>3. 您只能用储蓄卡进行充值，如遇到任何支付问题可以查看在线支付帮助；</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}