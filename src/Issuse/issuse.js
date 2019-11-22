import React from "react";
import { Input, Button, Icon } from 'antd';
const { TextArea } = Input;


var IssusePageCss = require("./issuse.css")
export default class IssusePage extends React.Component {
    render() {
        return (
            <div className={IssusePageCss.total}>
                <div className={IssusePageCss.intotal}>
                    <div className={IssusePageCss.header}>
                        <p className={IssusePageCss.left}>简单描述一下你的宝贝吧</p>
                        <Icon type="smile" theme="twoTone" />
                        <TextArea rows={9} placeholder="尽量真实哦" />
                    </div>

                    <div className={IssusePageCss.middle}>
                        <p>添加图片</p>
                        <Icon type="plus-circle" theme="filled" style={{fontSize:"10em"}} />
                    </div>

                    <div className={IssusePageCss.bottom}>
                        
                        <Button type="primary" shape="round" size="large">发表/领取</Button>
                    </div>
                </div>
            </div>
        )
    }
}