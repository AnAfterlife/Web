import React from 'react'
import photo1 from '../../img/121.png'
import photo from '../../img/user.png'
import {Input,Row,Col, message} from 'antd'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Axios from 'axios';
const { Search } = Input;
var SearchPage=require('../Search/searchpage.css')


export default class Searchpage extends React.Component{

            constructor(props){
                super(props);
                this.state={
                    datalist:[{
                        name:"四川",
                        link:'/us'
                    }],
                    isLoaded:false
                }
            }
            changeValue=(e)=>{
                this.setState({
                    [e.target.name]:e.target.value
                })
                 }
                 componentDidMount() {
                    Axios.get('http://mock-api.com/Ln4LX4nx.mock/winniebloglistdata')
                      .then((res) => {
                        this.setState({
                          datalist: res.data.data
                        })
                      })
                  }
            Search=()=>{
               
                      
                Axios.post({
                    url:"",
                    
                }).then(result=>{
                    if (result.state==1) {
               
                        this.props.history.push(this.state.datalist.link)
                    }
                   else if(result.state==2) {
                       message.info("")
                   }
                }
                )
            }
    render(){
         
        return(
            <div className={SearchPage.search}>
                 <div className={SearchPage.searchview} >
    
    <Row>
      <Col span={8}> <div className={SearchPage.a}><div className={SearchPage.searchlogo}><Link to='/'><img src={photo1} width='300px' height='300px' className={SearchPage.logo}/></Link></div></div></Col>
      <Col span={8}><div className={SearchPage.searchpage2}><Search name="search"  placeholder="搜索你想要的商品内容" onSearch={value => console.log(value)} value={this.state.search} onChange={e=>this.changeValue(e)} enterButton  onClick={this.Search()}/></div></Col>
     
    </Row>
    
  </div>
            
                 </div>
            
        )
    }
}