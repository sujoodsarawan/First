import React , { Component} from 'react';
import axios from 'axios';
import Products from '../Pages/Products';

class ProductList extends Component{
    
    state={
            Products:[]
        }
    


    componentDidMount(){
        axios.get('http://localhost:3000/products/featured')
        .then(res =>{
            this.setState({
                Products:res.data
            })
        })
    }
    


    render(){
        
        
        return (
            <div>
                {this.state.Products.map(product => <Products product={product}/>)}
                <div className="clear"></div>


            </div>
        )
    }
}

export default ProductList;