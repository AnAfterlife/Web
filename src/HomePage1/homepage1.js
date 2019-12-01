import React from 'react'

import{Link} from 'react-router-dom';
import Input  from './../Input/input';
import { Icon, Spin } from 'antd';
import LubBoTu from './../LunBoTu/lunbotu'
// import {Avatar} from 'antd'
import photo from './../img/user.png'

var homepagecss=require('./homepage1.css')
export default class homepage extends React.Component{
    render(){
        return(
            <div className={homepagecss.top1}>
                <div className={homepagecss.toparea1}>
                    <div className={homepagecss.toparea4}>
                        <div className={homepagecss.toparea5}>
                <div className={homepagecss.toparea2}>
                   <a href="/">客服服务 </a>
                   <Spin>|</Spin>
                  <a href="/">返回首页</a>
                    </div>
                    
                    <div className={homepagecss.toparea3}>
                        <ul>
                           <li> <Link to='/login'>注册</Link></li> 
                           <li>  <Link to='/RegisterPage'>立即登录</Link></li> 
                           <li>  <Link to='/wallet'>我的信息</Link></li> 
                           <li>  <Link to='/PersonMessage/permeg'>我的订单</Link></li> 
                           <li>  <Link to='/'>购物车</Link></li>
                           </ul>
                           </div>
                    </div>
                    </div>
                </div>
                <div className={homepagecss.searchpage}>
                      <div className={homepagecss.search1}>
                      <div className={homepagecss.searchpage1}>购一购</div>
                      <div className={homepagecss.searchpage2}><Input></Input> </div>
                      <div className={homepagecss.searchpage3}><div className={homepagecss.search2}><div className={homepagecss.search3}><div><img src={photo}></img></div><a href="/login" className={homepagecss.btn}>请登录</a><a href="/RegisterPage">免费注册</a></div></div></div>
                     
                      </div>
                </div>
                
                <div className={homepagecss.all}>  
                <div className={homepagecss.one}>
                        <div className={homepagecss.list1}>              
                <div className={homepagecss.list2}><div className={homepagecss.list2a}>二手分类</div></div>
                 <div className={homepagecss.list3}><Icon type="coffee" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/menuspage'>点餐</Link></div>
                 <div className={homepagecss.list4}><Icon type="highlight" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/menuspage'>兼职</Link></div>
                <div className={homepagecss.list5}><Icon type="laptop" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/menuspage'>二手</Link></div>
                 <div className={homepagecss.list6}><Icon type="car" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/menuspage'>跑腿</Link></div>
                <div className={homepagecss.list7}><Icon type="read" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/menuspage'>代课</Link></div> 
                </div>
                
                <div className={homepagecss.two}>
                <div className={homepagecss.tuh}><div className={homepagecss.tuh1}><a href='/' className={homepagecss.btntwo}>首页</a><a className={homepagecss.btntwo}>最新商品</a><a className={homepagecss.btntwo}>商品推荐</a><a className={homepagecss.btntwo}>活动商品</a></div></div>
                <div className={homepagecss.tu1}><LubBoTu></LubBoTu></div>
                <div className={homepagecss.tu2}></div>
                </div>
                
                <div className={homepagecss.three}><div className={homepagecss.three1}><div className={homepagecss.three2}>消息</div></div><div className={homepagecss.three3}><div className={homepagecss.three4}>哈哈</div></div></div>
                </div>
                </div>
                <div className={homepagecss.bottom}>
                
                <div className={homepagecss.bottoma}><dic className={homepagecss.bottoma1}></dic></div>
                <div className={homepagecss.bottomb}></div>
                </div>
            </div>
        )
    }
}