import React from 'react'
import { Carousel } from 'antd';
import picture1 from './../登录1.jpg'
import picture2 from './../登录2.jpg'
import picture3 from './../登录3.jpg'
import picture4 from './../登录4.jpg'
var LunBoTu1 = require('./lunbotu1.css')
export default class LunBoTu extends React.Component{
    render(){
        return(
            <Carousel autoplay className={LunBoTu1.pic}>
    <div>
    <img src={picture1 }/><h3></h3>
    </div>
    <div>
    <img src={picture2 }/>
      <h3></h3>
    </div>
    <div>
    <img src={picture3 }/>
      <h3></h3>
    </div>
    <div>
    <img src={picture4 }/>
      <h3></h3>
    </div>
  </Carousel>

        )
    }
}