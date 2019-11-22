import React from 'react'
var listpagecss = require('./listpage.css')

export default class listpage extends React.Component {
  render() {
    return (
      <div className={MenuspageCss.contentleft}>
        <div className={MenuspageCss.contentleft1}><Avatar size={64} icon="user" /><div className={MenuspageCss.contentleft2}>商家信息</div></div>
        <div className={MenuspageCss.contentleft3}></div>
      </div>
    )
  }
}