import { IState, IAction } from '../interfaces/product-interfaces';

import {
  GET_HOME_PRODUCTS,
  GET_SHOP_PRODUCTS,
  GET_PRODUCT,
  LOADING_PRODUCT,
} from '../types';

const productReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case LOADING_PRODUCT:
      state = { ...state, loading: true };
      return state;
    case GET_PRODUCT:
      state = { ...state, product: action.payload, loading: false };
      return state;
    case GET_HOME_PRODUCTS:
      state = { ...state, productsHome: action.payload };
      return state;
    case GET_SHOP_PRODUCTS:
      state = { ...state, productsShop: action.payload };
      return state;
    default:
      return state;
  }
};

export default productReducer;
