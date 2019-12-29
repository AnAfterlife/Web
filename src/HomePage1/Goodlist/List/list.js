import React from 'react'



var ListCss=require('./list.css')
export default class List extends React.Component{
     
    render(){
       
        return(
         
                <div>
                 <p className={ListCss.location} >{ this.props.list.name}</p>
                 </div>
        )
    }
}