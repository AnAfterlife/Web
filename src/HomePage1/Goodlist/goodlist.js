import React from 'react'
import List from './List/list';


export default class GoodlistPage extends React.Component{
         getList(){
             let datalist=[{
                 id:1,
                 name:"电子产品" 
             },{
                 id:2,
                 name:"学习用品"
             },{
                 id:3,
                 name:"生活用品"
             },{
                 id:4,
                 name:"常用品"
             },{
                 id:5,
                 name:"卫生"
             },{
                 id:6,
                 name:"你爸爸"
             },{
                id:7,
                name:"哈和"
            }
            ]

             return datalist;
         }
    render(){
        let datalist =this.getList();
        return(
          
            datalist.map((item,i)=>(
                <List list={item}></List>
            ))
          
          
        )
    }
}