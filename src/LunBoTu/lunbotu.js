import React from 'react'
import { Carousel } from 'antd';
import picture1 from './../主页1.jpg'
import picture2 from './../主页2.jpg'
import picture3 from './../主页3.jpg'
import picture4 from './../主页3.jpg'
var LunBoTu1 = require('./lunbotu.css')
export default class LunBoTu extends React.Component{
    render(){
        return(
            <Carousel autoplay>
    <div>
    <img src={picture1 } className={LunBoTu1.photo}/>
    </div>
    <div>
    <img src={picture2} className={LunBoTu1.photo}/>
      <h3></h3>
    </div>
    <div>
    <img src={picture3 } className={LunBoTu1.photo}/>
      <h3></h3>
    </div>
    <div>
    <img src={picture3 } className={LunBoTu1.photo}/>
      <h3></h3>
    </div>
  </Carousel>

        )
    }
}