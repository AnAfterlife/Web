import React from "react";
import {Icon} from "antd";

var BottomCss = require("./bottom.css")
export default class Bottom extends React.Component {
    render() {
        return (
            <div className={BottomCss.bottom}>
                <div className={BottomCss.bottomleft}>
                    <div className={BottomCss.bottomtop1}>
                        <span>我的关注</span>
                    </div>
                    <div className={BottomCss.btm1}>
                        <p>3</p>  <p>1</p>  <p>5</p>
                    </div>
                    <div className={BottomCss.btm2}>
                        <p>商品关注</p> <p>店铺关注</p> <p>收藏内容</p>
                    </div>
                </div>

                <div className={BottomCss.bottomleft}>
                    <div className={BottomCss.bottomtop1}>
                        <span>浏览记录</span> <span>更多</span>
                        </div>
                        <div className={BottomCss.p} >
                            <p>还没有浏览记录哦</p>
                        </div>
                </div>
                <div className={BottomCss.lst}>
                    <div className={BottomCss.bottomtop2}>
                        <span>我的订单车</span>
                    </div>
                    <div className={BottomCss.car}>
                    <Icon type="car" theme="twoTone" style={{fontSize:"10em"}}/>
                    <p>您的订单车空空如也，快去下个订单吧</p>
                    </div>
                </div>
            </div>
        )
    }
}