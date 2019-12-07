import React from 'react'
import {Icon} from 'antd'
var CommodityCss = require('./commodity.css')
export default class CommodityPage extends React.Component{
    render(){
        return(
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
                <div className={CommodityCss.slideshow}>
                    <div className={CommodityCss.slideshow1}>
                        <div className={CommodityCss.slideshow2}><span date-role="" className={CommodityCss.number}>30 </span>/30</div>
                        <ul>
                            <li date-role='img' date-index='2' ><img data-src="" src=""></img>图片1</li>
                            <li date-role='img' date-index='2' ><img data-src="" src=""></img>图片2</li>
                            <li date-role='img' date-index='2' ><img data-src="" src=""></img>图片3</li>
                            <li date-role='img' date-index='2' ><img data-src="" src=""></img>图片4</li>
                            <li date-role='img' date-index='2' ><img data-src="" src=""></img>图片5</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}