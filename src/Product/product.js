import React from 'react'
import axios from 'axios'
var ProductCss = require('./product.css');

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
            isLoaded:false,
          }
      }
      componebtDidMount(){
          const _this=this;
          axios.get('/')
          .then(function (response){
              _this.setState({
                  product:response.date,
                  isLoaded:true
              });
          })
          .catch(function (error){
              console.log(error);
              _this.setState({
                  isLoaded:false,
                  error:error
              })
          })
      }
      

    render(){
        if(!this.state.isLoaded){
            return<div>正在请求数据</div>
        }
        return(
            this.props.products.map((product,i)=>{
                return(
            <div className={ProductCss.product3}>
            <div className={ProductCss.product2}></div>
                        <div className={ProductCss.introduce}>
            <div className={ProductCss.introduce2}><span>{product.price}</span></div>
            <div className={ProductCss.introduce1}><span>{product.introduce}</span></div>
                        </div>
                    </div>
                    )
                    })
        )
        
    }
}
export default Product;