import React from 'react'
import {Icon} from 'antd'
var bottomcss=require('./bottom.css')
export default class bottomPage extends React.Component{
    render(){
        return(


            <div className={bottomcss.bottom}>
                

            <div className={bottomcss.bottomb}>
                <div className={bottomcss.bottomball}>
                <div className={bottomcss.bottomb1}><img src={require('../img/pt1.png')} width='70px' height='70px' /><a href='/'>二手市场</a> </div>
                <div className={bottomcss.bottomb2}><div className={bottomcss.bottombtop}><ul> <li>关于市场</li> <li>关于我们</li> <li>产品介绍</li> <li>合作伙伴</li></ul> </div>  </div>
                <div className={bottomcss.bottomb2}><div className={bottomcss.bottombtop}> <ul> <li>帮助中心</li> <li>使用条款</li> <li>常见问题</li> <li>交流中心</li></ul> </div> </div>
                <div className={bottomcss.bottomb2}><div className={bottomcss.bottombtop}><ul> <li>了解更多</li> <li>授权协议</li> <li>相关政策</li> <li>友情提示</li></ul> </div> </div>
                <div className={bottomcss.bottomb2}><div className={bottomcss.bottombtop}> <ul> <li>客服中心</li> <li><Icon type="phone" theme="twoTone" width="20px" height="20px" />001-002-003</li> <li><div className={bottomcss.bottombtn}><a href="/merchant">在线客服</a></div></li> </ul> </div> </div>
               
               
               </div>
            </div> 
            </div> 
        )
    }
}
