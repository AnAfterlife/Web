import React from 'react';
import { Button, Input } from 'antd';
import { Avatar } from 'antd';
import {Pagination} from 'antd';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'
import { BackTop } from 'antd';
import { BrowserRouter, Switch } from 'react-router-dom'
import BottomPage from '../bottom/bottom';

const { Search } = Input;

var GoodsCss = require('./goods.css');

class GoodsPage extends React.Component {
    render() {
        return (

            <div>
                <div className={GoodsCss.header}>
                    <div className={GoodsCss.logo}>
                        <div className={GoodsCss.logo1}></div>
                        <div className={GoodsCss.text}>跳蚤优品</div>
                    </div>
                    <div className={GoodsCss.search}>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                    </div>
                </div>
                <div className={GoodsCss.choose}>
                    <ul class="fristchoose">
                        <li><a href="" class="ch1">亲，你是不是想找:</a></li>
                        <li><a href="" class="ch1">小米手机</a></li>
                        <li><a href="" class="ch1">苹果手机</a></li>
                        <li><a href="" class="ch1">oppo手机</a></li>
                        <li><a href="" class="ch1">华为手机</a></li>
                        <li><a href="" class="ch1">华为电脑</a></li>
                        <li><a href="" class="ch1">华硕电脑</a></li>
                        <li><a href="" class="ch1">苹果电脑</a></li>
                        <li><a href="" class="ch1">戴尔电脑</a></li>
                        <li><a href="" class="ch1">手表</a></li>
                    </ul>
                </div>
                <div className={GoodsCss.product}>
                    <Link to='/commodity'><div className={GoodsCss.product3}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div></Link>
                    <div className={GoodsCss.product1}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={GoodsCss.product1}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={GoodsCss.product1}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={GoodsCss.product4}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={GoodsCss.product3}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={GoodsCss.product1}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={GoodsCss.product1}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={GoodsCss.product1}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={GoodsCss.product4}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={GoodsCss.product3}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={GoodsCss.product1}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={GoodsCss.product1}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={GoodsCss.product1}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                    <div className={GoodsCss.product4}>
                        <div className={GoodsCss.product2}>图片</div>
                        <div className={GoodsCss.introduce}>
                            <div className={GoodsCss.introduce2}><span>价格</span></div>
                            <div className={GoodsCss.introduce1}><span>商品介绍</span></div>
                        </div>
                    </div>
                </div>
                <div className={GoodsCss.yema}>
                  <Pagination defaultCurrent={1} total={50} />
                </div>
                <div className={GoodsCss.picture}>
                    <Link to='/'><div className={GoodsCss.picture1}></div></Link>
                    <Link to='/'><div className={GoodsCss.picture2}></div></Link>
                    <Link to='/'><div className={GoodsCss.picture3}></div></Link>
                    <Link to='/'><div className={GoodsCss.picture4}></div></Link>
                </div>
               
            <BottomPage/>

               
                <div>
                    <BackTop />
                    <strong style={{ color: 'rgba(219, 126, 126,0.6)' }}> </strong>
                </div>

            </div>
        )
    }
}
export default GoodsPage;
