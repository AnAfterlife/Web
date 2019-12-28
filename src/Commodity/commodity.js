import React from 'react'
import { Icon } from 'antd'
import { Carousel } from 'antd';
import LubBoTu from './../LunBoTu/lunbotu'
import { Button, Radio} from 'antd';
import BottomPage from '../bottom/bottom'
var CommodityCss = require('./commodity.css')
export default class CommodityPage extends React.Component {    
        state = {
          size: 'large',
        };
      
        handleSizeChange = e => {
          this.setState({ size: e.target.value });
        };
      
    render() {
        const { size } = this.state;
        return (
            <div>
                <div className={CommodityCss.header}>
                    <div className={CommodityCss.logo}>
                        <div className={CommodityCss.logo1}></div>
                        <div className={CommodityCss.text}>跳蚤品质保障</div>

                    </div>
                    <div className={CommodityCss.header1}>
                        <div className={CommodityCss.header2}><Icon type="phone" />联系商家</div>
                        <div className={CommodityCss.header3}><Icon type="question-circle" />卖家信誉不良记录</div>
                        <div className={CommodityCss.header2}><Icon type="info-circle" />举报卖家</div>
                    </div>
                </div>
                <div className={CommodityCss.slideshow0}>
                <div className={CommodityCss.slideshow}>
                    <LubBoTu></LubBoTu>
                </div>
                <div className={CommodityCss.introduce}>
                   <div className={CommodityCss.introduce1}>商品名称</div>
                   <div className={CommodityCss.introduce2}>商品介绍</div>
                   <div className={CommodityCss.introduce3}>服务保障</div>
                   <div className={CommodityCss.introduce4}>商品价格</div>
                   <div className={CommodityCss.introduce5}><Button type="primary" size={size}>我要购买</Button></div>
                   <div className={CommodityCss.introduce5}><Button type="primary" size={size}>我要砍价</Button></div>
                   
                   </div>
                   
                </div>
                <div className={CommodityCss.introduce6}><BottomPage/></div>
                </div>
                
               )
         }
}