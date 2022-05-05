import { ADD_TO_CART, REMOVE_FROM_CART, DECREMENT_FROM_CART } from "../types";

export const addToCart = (product, quantity = null) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  let count = 0;

  cartItems.forEach((x, i) => {
    if (x.id === product.id) {
      alreadyExists = true;
      count = x.count;    
      count += quantity ?? 1;
      cartItems[i] = { ...product, count: count }
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: quantity ?? 1 });
  }

  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x.id !== product.id);
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const decrementFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let count = product.count ?? 1;

  cartItems.forEach((x, i) => {
    if (x.id === product.id && x.count > 1) {
      count -= 1;
      cartItems[i] = { ...product, count: count }
    }
  });
  dispatch({ type: DECREMENT_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
