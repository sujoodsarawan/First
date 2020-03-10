import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './action';

const initialState = {
  products: [],
  cart: []
};




const shopReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;
  
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const cart ={...state.cart};  
      const payload=action.payload;
      const HandelCart = (cart,payload)=>{
         const exisitingCartItem = cart.find(
          cartItem => cartItem.id ===payload.id
        )
        if(exisitingCartItem){
          return cart.map(cartItem =>
            cartItem.id === payload.id
            ?{...cartItem , quantity : cartItem.quantity+ 1} :cartItem       
            )
           }
        return [...cart , {...payload , quantity:1}]
      }

      return  {...state, cart: HandelCart}



    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );

      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

export default shopReducer;
