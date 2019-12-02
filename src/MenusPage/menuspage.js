import React from 'react';
import { Button } from 'antd';
import { Avatar } from 'antd';
import { Carousel} from 'antd';
import picture1 from './../代课1.jpg'
import picture2 from './../点餐1.jpg'
import picture3 from './../跑腿1.jpg'
import picture4 from './../二手1.jpg'
import picture5 from './../兼职1.jpg'
import {Link} from 'react-router-dom'
import {BrowserRouter,Switch} from 'react-router-dom'

import Input  from './../Input/input';

import Issuse from './../Issuse/issuse'

import Header from '../Header/header';

 var MenuspageCss =require('./menuspage.css');

class Menuspage extends React.Component {
    render() {
        return (
            
            <div>
                <BrowserRouter>
                <Header></Header>
                
                </BrowserRouter>
                <div className={MenuspageCss.toparea}> <Link to='/RegisterPage'>立即登录</Link></div>
                    <div className={MenuspageCss.toparea1}>
                        <Link to='/login'>注册</Link>
                        <div className={MenuspageCss.toparea2}>
                            <a><Link to='/issuse'>我要发布</Link></a>
                        
                            <div className={MenuspageCss.toparea3}>
                                <a><Link to='/PersonMessage/permeg'>我的订单</Link></a>
                            </div>
                        </div>
                    </div>
                    <div className={MenuspageCss.searchpage}>
                        <div className={MenuspageCss.searchpage1}>
                            校园服务系统
                        </div>
                        <div className={MenuspageCss.searchpage2}>
                            <Input></Input>
                        </div>
                    </div>
                    <div className={MenuspageCss.contentleft}>
                        <div className={MenuspageCss.contentleft1}><Avatar size={64} icon="user" /><div className={MenuspageCss.contentleft2}>商家信息</div></div>
                        <div className={MenuspageCss.contentleft3}></div>
                        <div className={MenuspageCss.contentleft4}>商品介绍</div>
                        <div className={MenuspageCss.contentleft5}>
                        <div className={MenuspageCss.contentleft6}>   
                        <div><Button type="primary"><Link to='issuse'>领取/发布</Link></Button></div>
                        </div> 
                        <div className={MenuspageCss.contentleft6}><a href ='merchant'><Button type="primary">联系商家</Button></a></div>
                        <div className={MenuspageCss.contentleft6}><Button type="primary"><Link to='review'>商品评价</Link></Button></div>
                        </div>
                    </div>
                    <div className={MenuspageCss.contentleft}>
                        <div className={MenuspageCss.contentleft1}><Avatar size={64} icon="user" /><div className={MenuspageCss.contentleft2}>商家信息</div></div>
                        <div className={MenuspageCss.contentleft3}></div>
                        <div className={MenuspageCss.contentleft4}>商品介绍</div>
                        <div className={MenuspageCss.contentleft5}>
                        <div className={MenuspageCss.contentleft6}>   
                        <div><Button type="primary">领取/发布</Button></div>
                        </div> 
                        <div className={MenuspageCss.contentleft6}><Button type="primary">联系商家</Button></div>
                        <div className={MenuspageCss.contentleft6}><Button type="primary">商品评价</Button></div>
                        </div>
                    </div>
                    <div className={MenuspageCss.contentleft}>
                        <div className={MenuspageCss.contentleft1}><Avatar size={64} icon="user" /><div className={MenuspageCss.contentleft2}>商家信息</div></div>
                        <div className={MenuspageCss.contentleft3}></div>
                        <div className={MenuspageCss.contentleft4}>商品介绍</div>
                        <div className={MenuspageCss.contentleft5}>
                        <div className={MenuspageCss.contentleft6}>   
                        <div><Button type="primary">领取/发布</Button></div>
                        </div> 
                        <div className={MenuspageCss.contentleft6}><Button type="primary">联系商家</Button></div>
                        <div className={MenuspageCss.contentleft6}><Button type="primary">商品评价</Button></div>
                        </div>
                    </div>
                    <div className={MenuspageCss.contentleft}>
                        <div className={MenuspageCss.contentleft1}><Avatar size={64} icon="user" /><div className={MenuspageCss.contentleft2}>商家信息</div></div>
                        <div className={MenuspageCss.contentleft3}></div>
                        <div className={MenuspageCss.contentleft4}>商品介绍</div>
                        <div className={MenuspageCss.contentleft5}>
                        <div className={MenuspageCss.contentleft6}>   
                        <div><Button type="primary">领取/发布</Button></div>
                        </div> 
                        <div className={MenuspageCss.contentleft6}><Button type="primary">联系商家</Button></div>
                        <div className={MenuspageCss.contentleft6}><Button type="primary">商品评价</Button></div>
                        </div>
                    </div>
                <Carousel autoplay className={MenuspageCss.car}>
                    <div ><img src={picture1}/><h1></h1></div>
                    <div ><img src={picture2}/><h1></h1></div>
                    <div ><img src={picture3}/><h1></h1></div>
                    <div ><img src={picture4}/><h1></h1></div>
                    <div ><img src={picture5}/><h1></h1></div>
                    
                </Carousel>
            </div>
        )
    }
}
export default Menuspage;
