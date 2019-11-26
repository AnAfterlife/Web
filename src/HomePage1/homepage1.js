import React from 'react'
import{Link} from 'react-router-dom';
import Input  from './../Input/input';
import { Icon } from 'antd';
import LubBoTu from './../LunBoTu/lunbotu'

var homepagecss=require('./homepage1.css')
export default class homepage extends React.Component{
    render(){
        return(
            <div className={homepagecss.top1}>
                <div className={homepagecss.toparea3}>
                <div className={homepagecss.toparea2}>Hi,欢迎来到校园购买网</div>
                <div className={homepagecss.toparea}><Link to='/HomePage1'>返回首页</Link></div>
                    <div className={homepagecss.toparea1}>
                           <li> <Link to='/login'>注册</Link></li> 
                           <li>  <Link to='/RegisterPage'>立即登录</Link></li> 
                           <li>  <Link to='/wallet'>我的信息</Link></li> 
                           <li>  <Link to='/PersonMessage/permeg'>我的订单</Link></li> 
                           <li>  <Link to='/'>购物车</Link></li>
                      
                    </div>
                </div>
                <div className={homepagecss.searchpage}>
                        <div className={homepagecss.searchpage1}>
                            校园服务系统
                        </div>
                        <div className={homepagecss.searchpage2}>
                            <Input></Input>
                        </div>
                </div>
                <div className={homepagecss.list1}>
                    <div className={homepagecss.list2}>服务种类</div>
                    <div className={homepagecss.list3}><Icon type="coffee" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/menuspage'>点餐</Link></div>
                    <div className={homepagecss.list4}><Icon type="highlight" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/menuspage'>兼职</Link></div>
                    <div className={homepagecss.list5}><Icon type="laptop" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/menuspage'>二手</Link></div>
                    <div className={homepagecss.list6}><Icon type="car" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/menuspage'>跑腿</Link></div>
                    <div className={homepagecss.list7}><Icon type="read" style={{ fontSize: '30px', color: '#09130a' }}/><Link to='/menuspage'>代课</Link></div>
                    
                </div>
                <div className={homepagecss.tu1}><LubBoTu></LubBoTu></div>
                <div className={homepagecss.tu2}></div>
            </div>
        )
    }
}