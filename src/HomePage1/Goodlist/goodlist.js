import React from 'react'
import {Link,Route} from 'react-router-dom'
import {Button} from 'antd'
import UsPage from '../../bottom/Us/us'
import Merchant from '../../Merchant/merchant'
import List from './List/list';
import Axios from 'axios';

var goodListCSS =require('../Goodlist/goodlist.css')
 class GoodlistPage extends React.Component{
    constructor(props){
         super(props);
        //  this.state={
        //     datalist : [
        //         {
        //             id:1,
        //             name:'电子用品',
        //             link:"/us",
                   
        //         },
        //         {
        //             id:2,
        //             name:'生活用品',
        //             link:"/merchant",
                   
        //         },
        //         {
        //             id:3,
        //             name:'学习用品',
        //             link:"h",
                   
        //         },
        //         {
        //             id:4,
        //             name:'学习用品',
        //             link:"h",
                   
        //         }
        //     ]
        //  }
    }
        
    render(){
     
        return(
          
            <div className={goodListCSS.location}>
            {this.props.lists.map((list,i)=>{
            return (
            <li>
                <tr key={list.id}><a href={list.link}>{list.id} {list.name}</a></tr>
                
             <Route path="/us" component={UsPage}></Route>
             <Route path="/merchant" exact component={Merchant}></Route>
            
            </li>)
            })
            }
           
            </div>
          
          
        )
    }
   
}
class En extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            isLoaded:false,
        }
    }

 componentDidMount(){
     const _this=this;

     Axios.post({
         url:"/Goods/DivideGoods"
     }).then(function (response) {
         _this.setState({
             list:response.data,
             isLoaded:true
         });
     })
 }
    render(){
        if(!this.state.isLoaded){
            return <div className={goodListCSS.position}>Loading</div> 
          }else{
        return(
            <div>
            <GoodlistPage list={this.state.lists}/>
        </div>
        )
       
     }

    }
}
export default En;
   //  refreshValue=()=>{
            
        //       var data=this.state.datalist

        //     Axios.post({
        //         url:"/",
        //         data:JSON.stringify(data)
        //     }).then(result=>{
        //         if(result.status==1){
        //             this.setState({
        //                 id:"1",
        //                 name:"ha",
                        
        //             })
        //             console.log("hah")
        //         }else{
        //             console.log("你好")
        //         }
        //     })
           
        //  }
        
      
        //  getList(){
        //      let datalist=[{
        //          id:this.state.id,
        //          name:this.state.name,
        //      }
        //     ]

        //      return datalist;

        //  }