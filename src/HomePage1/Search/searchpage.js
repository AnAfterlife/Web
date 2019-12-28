import React from 'react'
import photo1 from '../../img/121.png'
import photo from '../../img/user.png'
import {Input,Row,Col} from 'antd'
const { Search } = Input;
var SearchPage=require('../Search/searchpage.css')


export default class Searchpage extends React.Component{
    render(){
        return(
            <div className={SearchPage.search}>
                 <div className={SearchPage.searchview} >
    
    <Row>
      <Col span={8}> <div className={SearchPage.a}><div className={SearchPage.searchlogo}><img src={photo1} width='300px' height='300px' className={SearchPage.logo}/></div></div></Col>
      <Col span={8}><div className={SearchPage.searchpage2}><Search  placeholder="搜索你想要的内容" onSearch={value => console.log(value)} enterButton /></div></Col>
      {/* <Col span={8}><div className={SearchPage.search3}><img src={photo} width='70px' height='70px' /><a href="/login" className={SearchPage.btn}>请登录</a><a href="/RegisterPage">免费注册</a></div></Col> */}
    </Row>
    
  </div>
                 {/* <div className={SearchPage.searchpage}>
                      <div className={SearchPage.search1}>
                      <div className={SearchPage.searchpage1}><div className={SearchPage.searchp1}><img src={photo1} width='75px' height='75px' className={SearchPage.logo}/><div className={SearchPage.logoname}>二手市场</div></div></div>
                      {/* <div className={SearchPage.searchpage2}><Input></Input> </div> */}
                      {/* <div className={SearchPage.searchpage3}><div className={SearchPage.search2}><div className={SearchPage.search3}><img src={photo} width='70px' height='70px' /><a href="/login" className={SearchPage.btn}>请登录</a><a href="/RegisterPage">免费注册</a></div></div></div>
                     
                      </div> */}
                 </div>
                //  */}
            // </div>
        )
    }
}