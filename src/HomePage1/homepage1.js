import React from 'react'

import{Link} from 'react-router-dom';
import Input  from './../Input/input';
import { Icon, Spin, Button, message } from 'antd';
import GoodlistPage from './Goodlist/goodlist'
import LubBoTu from './../LunBoTu/lunbotu'
import Goods from './../Goods/goods'
import List from './Goodlist/List/list'
import BottomPage from '../bottom/bottom'
import SearchPage from './Search/searchpage'
import Navigation from '../HomePage1/Navigation/navigation'
import Message from '../HomePage1/Navigation/Message/message'
// import {Avatar} from 'antd'
import { Typography } from 'antd';
import { Divider } from 'antd';
import CenterPage from '../Center/center';
import { BrowserRouter,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Axios from 'axios';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];



var homepagecss=require('./homepage1.css')
export default class homepage extends React.Component{
    constructor(props){
      super(props);
      this.state={
        
       
      }
    }
   
    
    refreshValue=()=>{
    
      var data=this.props.datalist
     
    Axios.post({
        url:"/",
       
    }).then(result=>{
        if(result.status==1){
            this.props.setState({
              success: function (data) {
                alert(data);
            }
                
            })
            message.info("ahh")
        }else{
          message.info("嗯哼")
        }
    })
   
 }

    render(){
     
        return(
            <div className={homepagecss.top1}>
               
              <SearchPage/>
            +
                <div className={homepagecss.all}>  
               
        
                <div className={homepagecss.one}>
                <div className={homepagecss.tuh}>
                  <div className={homepagecss.tuh1}>

                    <BrowserRouter>
                    <div className={homepagecss.goodslist}>
                      <Link to="/goodlist">
                        <div ><Icon type="unordered-list" onClick={this.refreshValue()} />商品分类 </div></Link> </div>
                      <Route path="/goodlist" component={GoodlistPage}></Route>
               

               
                 <Navigation/>
                 <Route path="/message" component={Message}></Route>
                 </BrowserRouter>
               </div></div>
               

                <div className={homepagecss.tu1}><LubBoTu></LubBoTu></div>
                <Divider></Divider>
               <div> <CenterPage/></div>
                <Divider></Divider>
                <div>  <BottomPage/></div>

              
                </div>
                
                </div>
                <Route path="/goodlist" component={GoodlistPage}></Route>
                
             
                
            </div>
        )
    }
}