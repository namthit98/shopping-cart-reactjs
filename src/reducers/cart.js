import * as types from '../constants/ActionTypes';

const data = JSON.parse(localStorage.getItem("carts"));

const initialState = data ? data : [];

const findProductInCart = (cart, product) => {
  if(cart.length > 0) {
    return cart.findIndex(el => el.product.id === product.id);
  }

  return -1;
}

const cart = (state = initialState, action) => {
  const { product } = action;

  let idx = -1;

  switch(action.type) {
    case types.ADD_TO_CART:
      const { quantity } = action;

      idx = findProductInCart(state, product);

      if(idx !== -1) {
        state[idx].quantity += quantity;
      } else {
        state.push({
          product,
          quantity
        });
      }

      localStorage.setItem("carts", JSON.stringify(state));
      return [...state];
    case types.DELETE_PRODUCT_IN_CART:
      idx = findProductInCart(state, product);
      
      if(idx !== -1) {
        state.splice(idx, 1);
      }
      
      localStorage.setItem("carts", JSON.stringify(state));
      return [...state];
    case types.UPDATE_QUANTITY_PRODUCT_IN_CART:
      const { mode } = action;

      idx = findProductInCart(state, product);

      if(idx !== -1) {
        if(state[idx].quantity + mode >= 1) {
          state[idx].quantity = state[idx].quantity + mode;        
        }
      }

      localStorage.setItem("carts", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

export default cart;