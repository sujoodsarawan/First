import React , { Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { addProductToCart } from '../store/action';
import { connect } from 'react-redux';


import MakeComment from './MakeComment';


class Product extends Component{

    state={
            Product:null,
            quantity:0
        }
    
    componentDidMount(){

        let id = this.props.match.params.id;
        axios.get(`http://localhost:3000/products/${id}`)
        .then(res =>{
            this.setState({
                Product:res.data
            })
        })
       
    }

    
   
    render(){
        
        const Product = this.state.Product ?(
            <div>

<img 
src="https://vccim.com/media/catalog/product/cache/0/image/504x644/9df78eab33525d08d6e5fb8d27136e95/c/2/c24f995b6b04bddd72dd255810fc424deb19b349-LRD_GGO655-3617.jpg"
 alt="Denim Jeans"  style={{width:270, height:300}}/>
             <h1>{this.state.Product.productName}  : <span> {this.state.Product.productPrice}</span></h1>


            </div>
        ):(
            <div>Loading ...</div>
        )

        return (
   <div>
      {Product}
  

      <button  onClick={this.props.addProductToCart.bind(this, this.state.Product)} > Add to Cart  </button>
        <Link to="/cart">
            <p>Cart</p>
        </Link>
        
  </div>
        )
       }
}


const mapStateToProps = state => {
  console.log(state);
    
  return {
      products: state.products,
      
      
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      addProductToCart: product => dispatch(addProductToCart(product))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product);

