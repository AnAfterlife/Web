import React from 'react'

import{Link} from 'react-router-dom';
import Input  from './../Input/input';
import { Icon, Spin } from 'antd';
import LubBoTu from './../LunBoTu/lunbotu'
// import {Avatar} from 'antd'
import photo1 from './../img/shopping.png'
import photo from './../img/user.png'


var homepagecss=require('./homepage1.css')
export default class homepage extends React.Component{
    render(){
        return(
            <div className={homepagecss.top1}>
               
                <div className={homepagecss.searchpage}>
                      <div className={homepagecss.search1}>
                      <div className={homepagecss.searchpage1}><img src={photo1} width='75px' height='75px' className={homepagecss.logo}></img> <div className={homepagecss.logoname}>Campus Shopping</div></div>
                      <div className={homepagecss.searchpage2}><Input></Input> </div>
                      <div className={homepagecss.searchpage3}><div className={homepagecss.search2}><div className={homepagecss.search3}><img src={photo} width='70px' height='70px' /><a href="/login" className={homepagecss.btn}>请登录</a><a href="/RegisterPage">免费注册</a></div></div></div>
                     
                      </div>
                </div>
                
                <div className={homepagecss.all}>  
                <div className={homepagecss.one}>
                        <div className={homepagecss.list1}>              
                <div className={homepagecss.list2}><div className={homepagecss.list2a}>二手分类</div></div>
                 <div className={homepagecss.list3}><div className={homepagecss.list3a}><Icon type="laptop" style={{ fontSize: '30px', color: '#09130a' }}/>电子产品</div><div className={homepagecss.list3b}><ul><li><a href='/menuspage'>耳机</a></li> <li><a href='/menuspage'>手机</a></li> <li><a href='/menuspage'>电脑</a></li>  <li><a href='/menuspage'>电脑主机</a></li> <li><a href='/menuspage'>音响</a></li> <li><a href='/menuspage'>鼠标</a></li> </ul> </div></div>
                 <div className={homepagecss.list4}><div className={homepagecss.list3a}><Icon type="highlight" style={{ fontSize: '30px', color: '#09130a' }}/>学习用品</div><Link to='/menuspage'>笔 复习资料 手抄笔记 </Link></div>
                <div className={homepagecss.list5}><div className={homepagecss.list3a}><Icon type="coffee" style={{ fontSize: '30px', color: '#09130a' }}/>生活用品</div><Link to='/menuspage'><ul>衣架 桶 洗脸盆 床桌 写字台 电灯 充电宝 </ul></Link></div>
                 {/* <div className={homepagecss.list3}><div className={homepagecss.list3a}>电子产品</div><Icon type="coffee" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/goods'>点餐</Link></div>
                 <div className={homepagecss.list4}><div className={homepagecss.list3a}>电子产品</div><Icon type="highlight" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/goods'>兼职</Link></div>
                <div className={homepagecss.list5}><div className={homepagecss.list3a}>电子产品</div><Icon type="laptop" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/goods'>二手</Link></div> */}
                 {/* <div className={homepagecss.list6}><Icon type="car" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/menuspage'>跑腿</Link></div>
                <div className={homepagecss.list7}><Icon type="read" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/menuspage'>代课</Link></div>  */}
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
                <div className={homepagecss.bottomb}>
                    <div className={homepagecss.bottomball}>
                    <div className={homepagecss.bottomb1}><img src={require('../img/pt1.png')} width='70px' height='70px' /><a href='/'>Campus Shopping</a> </div>
                    <div className={homepagecss.bottomb2}><div className={homepagecss.bottombtop}><div>关于CS</div><li>关于我们</li><li>项目介绍</li><li>合作伙伴</li></div> </div> 
                    <div className={homepagecss.bottomb2}><div className={homepagecss.bottombtop}><div>帮助中心</div><li>常见问题</li><li>购买询问</li><li>联系我们</li></div> </div>
                    <div className={homepagecss.bottomb2}><div className={homepagecss.bottombtop}><div>关于CS</div><li>关于我们</li><li>项目介绍</li><li>合作伙伴</li></div> </div>
                    <div className={homepagecss.bottomb2}><div className={homepagecss.bottombtop}><div>关于CS</div><li>关于我们</li><li>项目介绍</li><li>合作伙伴</li></div> </div>
                    </div></div>


                </div>
            </div>
        )
    }
}