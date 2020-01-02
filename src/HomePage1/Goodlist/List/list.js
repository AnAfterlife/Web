import React from 'react'
import { Button } from 'antd'



var ListCss=require('./list.css')
export default class List extends React.Component{
     
    render(){
       
        return(
         
                <div className={ListCss.location}>
                 <p>{this.props.list.id}</p>
                
                 </div>
                 
        )
    }
}