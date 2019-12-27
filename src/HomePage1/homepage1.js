import React from 'react'

import{Link} from 'react-router-dom';
import Input  from './../Input/input';
import { Icon, Spin } from 'antd';
import LubBoTu from './../LunBoTu/lunbotu'
import Goods from './../Goods/goods'
import bottomPage from '../bottom/bottom'
import SearchPage from './Search/searchpage'
// import {Avatar} from 'antd'
import { List, Typography } from 'antd';
import { Divider } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];



var homepagecss=require('./homepage1.css')
export default class homepage extends React.Component{

    //    onload=function () {
    //         var odiv =document.getElementById('goodslist');
    //         odiv.onmouseover=function () {
    //             startMove();
    //         }
    //     }
    //     startMove=  function() {
    //         var odiv =document.getElementById(goodslist)
    //       timer=setInterval(function() {
    //           if(odiv.offsetLeft==0)
    //      clearInterval(timer);
    //         })
    //     }
      
    render(){
        return(
            <div className={homepagecss.top1}>
               
              <SearchPage/>
                <div className={homepagecss.all}>  
               
                      
                
                <div className={homepagecss.one}>
                <div className={homepagecss.tuh}><div className={homepagecss.tuh1}><div className={homepagecss.goodslist}><Icon type="unordered-list" />商品分类<div className={homepagecss.list}><div className={homepagecss.lista}>
               <ul>
                    <li className={homepagecss.a}><a>电子产品 <div className={homepagecss.pagea}> <p>
     手机 电脑
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p></div></a></li>
                    <li className={homepagecss.b}><a>学习用品 <div className={homepagecss.pageb}>啥比</div></a></li>
                    <li>生活用品</li>
                    <li>生活用品</li>
                </ul>
           
    </div></div></div><a href='/' className={homepagecss.btntwo}>首页</a><a className={homepagecss.btntwo}>最新商品</a><a className={homepagecss.btntwo}>商品推荐</a><a className={homepagecss.btntwo}>发布商品</a><a className={homepagecss.btntwo}>最新消息</a></div></div>
                <div className={homepagecss.tu1}><LubBoTu></LubBoTu></div>
                <div className={homepagecss.tu2}></div>
                </div>
                </div>
              
                 <div className={homepagecss.bottom}>
                

                <div className={homepagecss.bottomb}>
                    <div className={homepagecss.bottomball}>
                    <div className={homepagecss.bottomb1}><img src={require('../img/pt1.png')} width='70px' height='70px' /><a href='/'>二手市场</a> </div>
                    <div className={homepagecss.bottomb2}><div className={homepagecss.bottombtop}><ul> <li>关于市场</li> <li>关于我们</li> <li>产品介绍</li> <li>合作伙伴</li></ul> </div>  </div>
                    <div className={homepagecss.bottomb2}><div className={homepagecss.bottombtop}> <ul> <li>帮助中心</li> <li>使用条款</li> <li>常见问题</li> <li>交流中心</li></ul> </div> </div>
                    <div className={homepagecss.bottomb2}><div className={homepagecss.bottombtop}><ul> <li>了解更多</li> <li>授权协议</li> <li>相关政策</li> <li>友情提示</li></ul> </div> </div>
                    <div className={homepagecss.bottomb2}><div className={homepagecss.bottombtop}> <ul> <li>客服中心</li> <li><Icon type="phone" theme="twoTone" width="20px" height="20px" />001-002-003</li> <li><div className={homepagecss.bottombtn}><a href="/merchant">在线客服</a></div></li> </ul> </div> </div>
                   
                   </div>
                </div> 
                
              </div> 
              
            </div>
        )
    }
}