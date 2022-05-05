import data from '../../db.json';
import { FETCH_PRODUCTS } from "../types";
import { FILTER_PRODUCTS_BY_CATEGORY } from "../types";

export const fetchProducts = () => async (dispatch) => {
  const products = data.products
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products,
  });
};

export const filterProducts = (products, category) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: {
      category: category,
      items:
      category === ""
          ? products
          : products.filter((x) => x.category.indexOf(category) >= 0),
    },
  });
};

