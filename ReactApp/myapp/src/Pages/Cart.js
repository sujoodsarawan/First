import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeProductFromCart } from '../store/action';

class CartPage extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="cart">
          {this.props.cartItems.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.props.cartItems.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.productNamce}</strong> - ${cartItem.productPrice} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button
                    onClick={this.props.removeProductFromCart.bind(
                      this,
                      cartItem.id
                    )}
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log('state is ',state);
  
  return {
    cartItems: state.cart,
   
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProductFromCart: id => dispatch(removeProductFromCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);