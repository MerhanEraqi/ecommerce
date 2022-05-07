import data from '../../db.json';
import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => async (dispatch) => {
  const products = data.products
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products,
  });
};

