import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPage from './RegisterPage/RegisterPage';
import login from './login/login';
import FindPage from './FindPage/findpage';
import FindPage1 from './FindPage1/findpage1';
import Goods from './Goods/goods';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Merchant from './Merchant/merchant';
import HomePage1 from './HomePage1/homepage1';
import homepage from './HomePage1/homepage1';

import Header from'./Header/header';
import Review from './Review/review';
import Wallet from './InterPerson/Wallet/wallet'
import Issuse from './Issuse/issuse';
import PersonMessage from './PersonMessage/permeg';
import CommodityPage from './Commodity/commodity';
import UsPage from './bottom/Us/us';


class IndexPage extends React.Component{
    render(){
        return(
            <div>
                {/* <Login/>
                <div>
                <RegisterPage/>
                <div>  
                <FindPage/>
                    </div>  
                    <div>  
                <FindPage1/>
                    </div>  
                </div> */}
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={HomePage1}></Route>
                        <Route path='/login' component={login} history={this.props.history}></Route>
                        <Route path='/RegisterPage' exact component={RegisterPage}></Route>
                        <Route path='/findpage' exact component={FindPage}></Route>
                        <Route path='/findpage1' exact component={FindPage1}></Route>
                        <Route path="/goods" exact component={Goods}></Route>
                        <Route path="/merchant" exact component={Merchant}></Route>
                        <Route path="/homepage1" exact component={HomePage1}></Route>
                        <Route path="/PersonMessage/permeg" exact component={PersonMessage}></Route>
                        <Route path="/review" component ={Review}></Route>
                        <Route path='/issuse' component = {Issuse}></Route>
                        <Route path='/wallet' component = {Wallet}></Route>
                        <Route path='/commodity' component = {CommodityPage}></Route>
                        <Route path='/us' component={UsPage} history={this.props.history}></Route>
                      
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage/>, document.getElementById('root'));
