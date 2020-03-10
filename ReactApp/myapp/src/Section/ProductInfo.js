import React , { Component } from "react";



class ProductInfo extends Component{

    addToCartHandler =()=>{

       this.props.addToCart(this.props.Product._id)


    }


    render(){

        return(
            <div>
                ProductInfo

                <button onClick={this.addToCartHandler} >ADD To cart</button>
            </div>
        )
    }
}

export default ProductInfo;