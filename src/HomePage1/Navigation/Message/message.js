import React from 'react'
import Axios from 'axios'
import {message} from 'antd'


var MessageCss=require('./message.css')
export default class Message extends React.Component{
      constructor(props){
          super(props);
          this.state={
              messages:[
              {id:'1',name:'好运来',address:'/us'},
              {id:'2',name:'四叶草',address:''},
              {id:'3',name:'四叶草',address:''},
              {id:'4',name:'四叶草',address:''}

              ],
              isLoaded:false
          }
      }
      componentDidMount(){
        const _this=this;
   
        Axios.post({
            url:"/message"
        }).then(function (response) {
            _this.setState({
                message:response.data,
                isLoaded:true
            });
           
        })
    }
    render(){
    //     const hah=[];
    //     let message=this.state.messages;
    //    message.array.forEach(item => {
    //         hah.push(
    //           <div>
    //               {item.name};
    //               <a>{item.address}</a>
    //           </div>
    //         )
    //     });
            
        if (!this.state.isLoaded) {
             
              var is=this.state.messages;
             

            return this.state.messages.map((item,i)=>{
                message.info("请求失败,只能显示已有数据")
                return (
                   <div className={MessageCss.list}>
                      <a href={item.address}> {item.name}</a>
                   </div>
                //     <div id='test' className={MessageCss.list}></div>
                )
                
            })

           
            
        }else{
        return(
            <div className={MessageCss.big}>
                 请求成功
                 <div>
                {message.name}
                 </div>
           
            </div>
        )
    }
}
}