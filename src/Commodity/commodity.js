import React from 'react'
import { Icon } from 'antd'
import { Carousel } from 'antd';
import LubBoTu from './../LunBoTu/lunbotu'
import { Button, Radio} from 'antd';
import BottomPage from '../bottom/bottom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Comment from './../Comment/comment'
var CommodityCss = require('./commodity.css')
var hh=require("../img/pt1.png")
export default class CommodityPage extends React.Component { 
    constructor(props){
        super(props);
        this.state={
            names:'数据获取失败'
            ,
            isLoaded:false,
        }
    }
    componentDidMount(){
        const _this=this;
        axios.get('')
        .then(function (response){
            _this.setState({
                names:response.date,
                isLoaded:true
            });
        })
        .catch(function (error){
            console.log(error);
            _this.setState({
                isLoaded:false,
                error:error
            })
        })
    }   
    
    render() {
        if(!this.state.isLoaded){
           
            return<div>
            <div className={CommodityCss.header}>
                <div className={CommodityCss.logo} >
                    <div className={CommodityCss.logo1} ><img src={hh} width="150px" height="150px"></img></div>
                    <div className={CommodityCss.text}>跳蚤品质保障</div>

                </div>
                <div className={CommodityCss.header1}>
                    <div className={CommodityCss.header2}><Icon type="phone" />联系商家</div>
                    <div className={CommodityCss.header3}><Icon type="question-circle" />卖家不良记录</div>
                    <div className={CommodityCss.header2}><Icon type="info-circle" />举报卖家</div>
                    <div className={CommodityCss.header2}><Icon type="message" /><Link to="/Comment">买家评论</Link></div>
                </div>
            </div>
            <div className={CommodityCss.slideshow0}>
            <div className={CommodityCss.slideshow}>
                <LubBoTu></LubBoTu>
            </div>
            <div className={CommodityCss.introduce}>
        <div className={CommodityCss.introduce1} value="">{this.state.names}</div>
               <div className={CommodityCss.introduce2}>商品介绍</div>
               <div className={CommodityCss.introduce3}>服务保障</div>
               <div className={CommodityCss.introduce4}>商品价格</div>
               <div className={CommodityCss.introduce5}><Button type="primary" >我要购买</Button></div>
               <div className={CommodityCss.introduce5}><Button type="primary" >我要砍价</Button></div>
               
               </div>
               
            </div>
            <div className={CommodityCss.picture5}>
            <div className={CommodityCss.picture}>
                    <Link to='/'><div className={CommodityCss.picture1}></div></Link>
                    <Link to='/'><div className={CommodityCss.picture2}></div></Link>
                    <Link to='/'><div className={CommodityCss.picture3}></div></Link>
                    <Link to='/'><div className={CommodityCss.picture4}></div></Link>
                </div>
            <div className={CommodityCss.introduce6}><BottomPage/></div>
            </div>
            </div>
        }else{
        return (
          
            <div>
                <div className={CommodityCss.header}>
                    <div className={CommodityCss.logo} >
                        <div className={CommodityCss.logo1} ><img src={hh} width="150px" height="150px"></img></div>
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
            <div className={CommodityCss.introduce1} value="">商品名称</div>
                   <div className={CommodityCss.introduce2}>商品介绍</div>
                   <div className={CommodityCss.introduce3}>服务保障</div>
                   <div className={CommodityCss.introduce4}>商品价格</div>
                   <div className={CommodityCss.introduce5}><Button type="primary" >我要购买</Button></div>
                   <div className={CommodityCss.introduce5}><Button type="primary" >我要砍价</Button></div>
                   
                   </div>
                   
                </div>
                <div className={CommodityCss.introduce6}><BottomPage/></div>
                </div>
           
               )
        }
         }
}