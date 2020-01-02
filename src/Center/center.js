import React from 'react'
import {Link} from 'react-router-dom'
import Product from  './../Product/product'
var CenterPageCss=require('./center.css')

export default class CenterPage extends React.Component{



    render(){
        return(
            <div>
            <div className={CenterPageCss.product}>
                    <Link to='/commodity'><div className={CenterPageCss.product3}>
                        <Product/>
                    </div></Link>
                    <div className={CenterPageCss.product1}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={CenterPageCss.product1}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={CenterPageCss.product1}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={CenterPageCss.product4}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={CenterPageCss.product3}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={CenterPageCss.product1}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={CenterPageCss.product1}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={CenterPageCss.product1}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={CenterPageCss.product4}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={CenterPageCss.product3}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={CenterPageCss.product1}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={CenterPageCss.product1}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={CenterPageCss.product1}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={CenterPageCss.product4}>
                        <div className={CenterPageCss.product2}>图片</div>
                        <div className={CenterPageCss.introduce}>
                            <div className={CenterPageCss.introduce2}><span>价格</span></div>
                            <div className={CenterPageCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}