import React , { Component } from "react";


class ProductImage extends Component{



    render(){

        console.log(this.props.Product);
        
        return(
            <div>
               ProductImage

              <h1>The Image will be Here </h1>
            </div>
        )
    }
}

export default ProductImage;