import axios from 'axios';

export const set = (cart) => {
    return {
      type: SET_CART,
      payload: cart
    }
  }
