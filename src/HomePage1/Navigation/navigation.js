import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import Message from './Message/message'

var NavigationCss =require('./navigation.css')
export default class Navigation extends React.Component{
      constructor(props){
          super(props);
          this.state={
            key:"",
            navigation:[],
            isLoaded:false,
          }
      }
      componentDidMount(){
        const _this=this;
   
        Axios.post({
            url:"/navigation"
        }).then(function (response) {
            _this.setState({
                navigation:response.data,
                isLoaded:true
            });
        })
    }

    render(){
      
        if(!this.state.isLoaded){
            return <div  className={NavigationCss.all}>
              
           
             <a href='/' className={NavigationCss.btntwo}>首页</a>
           <a href='/' className={NavigationCss.btntwo } >最新商品</a>
            <a  href='/' className={NavigationCss.btntwo}>商品推荐</a>
            <a href='/' className={NavigationCss.btntwo}>发布商品</a>
          
      <Link to='/message'><a className={NavigationCss.btntwo}>最新消息</a></Link>
          
          
         
         
            </div> 
          }else{
        return(
         
            <div className={NavigationCss.all} >
          
          
          {this.props.navigation.map((navigation,i)=>{
              return(
                  <li>
                <tr key={navigation.id}>
                  <a href={navigation.link}>
                    {navigation.name}</a>
                  </tr>
              
                
                </li>
              )
          })
          }
      
     
       
            </div>
        )
    }
}
}