import React , { Component} from 'react';
import queryString from 'query-string';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Item extends Component{ 


    
    state={
        items:[]
    }

        
    
    componentDidMount(){


        console.log(this.props.location.search);
        const values = queryString.parse(this.props.location.search)
        console.log(values.search);
        

        axios.get(`http://localhost:3001/search/product?search=${values.search}`)
        .then(res =>{
            this.setState({
                items:res.data
            })

            console.log(res);
            
        })



        

    }



    render(){
        
      
        return (
            <div>
                Hello World
                {
                        this.state.items.map(item =>(
                            <div key={item._id}>                         
                            <Link to={"/item/"+ item._id}> 
                                                       
                            {item.productName}
                            
                            </Link> 
                            </div>
                                          
                        ) )

                }
            
            </div>
        )
    }
}

export default Item;