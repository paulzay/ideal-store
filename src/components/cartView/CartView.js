import React, { useContext } from "react";
import { withRouter } from 'react-router-dom';
import { CartContext } from '../../providers/cart/cart.provider';

import CartData from './CartData';


const CartView = ({history}) =>  {
  const { cartItems, toggleHidden } = useContext(CartContext);

 
    return (
      <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartData key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <button
        onClick={() => {
          history.push('/checkout');
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </button>
      </div>
    );
  
}

export default withRouter(CartView);
