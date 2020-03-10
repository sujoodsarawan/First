import React  , {Component} from 'react';
import {Link} from 'react-router-dom';
import './Product.css'

class Product extends Component{


    render(){

            return(

            <div className="container">
                    <div className="card">
                            <img src="https://vccim.com/media/catalog/product/cache/0/image/504x644/9df78eab33525d08d6e5fb8d27136e95/c/2/c24f995b6b04bddd72dd255810fc424deb19b349-LRD_GGO655-3617.jpg"
                                alt="Denim Jeans"
                               style={{width:270, height:300}}
                            />
                            <Link to={`/item/${this.props.product._id}`} >
                            <div>{this.props.product.productName}</div>
                            </Link>
                                  <p class="price">${this.props.product.productPrice}</p>

                            
                    </div>
                

            </div>

        )
    }


}


export default Product;
