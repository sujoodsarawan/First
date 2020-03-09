import React , {Component} from 'react';


class MakeComment extends Component{


    
    
    render () {

        console.log(this.props.Product);
            

        return(
            <div> {
               <h1>{ this.props.Product.productName}</h1>         
               
                }

                <input ref='email' type='email' placeholder="sujoodsarawan@gmail.com" />
                <input ref='first-name' type='text' placeholder="First Name" />
                <input ref='last-name' type='text' placeholder="Last Name" />

                <button type="submit"> ADD </button>
                
                 </div>

        )
        }


}

export default MakeComment;