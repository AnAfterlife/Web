import React from 'react'

import{Link} from 'react-router-dom';
import Input  from './../Input/input';
import { Icon, Spin } from 'antd';

import LubBoTu from './../LunBoTu/lunbotu'
import Goods from './../Goods/goods'
import BottomPage from '../bottom/bottom'
import SearchPage from './Search/searchpage'
// import {Avatar} from 'antd'
import { List, Typography } from 'antd';
import { Divider } from 'antd';
import CenterPage from '../Center/center';

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
                <Divider></Divider>
               <div> <CenterPage/></div>
                <Divider></Divider>
                <div>  <BottomPage/></div>
                </div>
                </div>
              
             
                
            </div>
        )
    }
}