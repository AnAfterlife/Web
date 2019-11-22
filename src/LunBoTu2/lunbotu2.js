
import React from 'react'
import { Carousel } from 'antd';
import picture1 from './../注册1.jpg'
import picture2 from './../注册2.jpg'
import picture3 from './../注册3.jpg'
import picture4 from './../注册4.jpg'
var LunBoTu1 = require('./lunbotu2.css')
export default class LunBoTu extends React.Component{
    render(){
        return(
            <Carousel autoplay className={LunBoTu1.pic}>
    <div className={LunBoTu1.pic1}>
    {/* <img src={picture1 }/> */}
    <h3></h3>
    </div>
    <div className={LunBoTu1.pic2}>
    {/* <img src={picture2 }/> */}
      <h3></h3>
    </div>
    <div className={LunBoTu1.pic3}>
    {/* <img src={picture3 }/> */}
      <h3></h3>
    </div>
    <div className={LunBoTu1.pic4}>
    {/* <img src={picture4 }/> */}
      <h3></h3>
    </div>
  </Carousel>

        )
    }
}