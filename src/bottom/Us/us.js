import React from 'react'
import BottomPage from '../bottom'


var UsCss=require('./us.css')


export default class UsPage extends React.Component{
    render(){
        return(
            <div>
                <div className={UsCss.body}>
                
                <div className={UsCss.a}> <div className={UsCss.location}>二手市场</div></div>
                <div className={UsCss.b}>
                    
                    <div className={UsCss.all}><div className={UsCss.content}>
                        
                        <div className={UsCss.left}><div>aaaa</div></div>
                        <div className={UsCss.right}><div>aaaa</div></div>
                        <div class={UsCss.clear}></div>
                        </div></div>
                    
                    
                     </div>



                </div>
                <BottomPage></BottomPage>
            </div>
        )
    }
}