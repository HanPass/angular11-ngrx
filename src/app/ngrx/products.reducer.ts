import { Product } from '../model/product.model';
import { ProductsActions, ProductActionTypes } from './products.actions';

export interface ProductsState {
  products:Product[],
  errorMessage:string,
  dataState:ProductStateEnum
}

export enum ProductStateEnum{
  LOADING= "loading",
  LOADED = "Loaded",
  ERROR = "Error",
  INITIAL = "Initial"
}

const initState:ProductsState = {
  products:[],
  errorMessage:"",
  dataState:ProductStateEnum.INITIAL
};

export function productsReducer(state:ProductsState=initState, action:ProductsActions):ProductsState{
  switch(action.type){
    case ProductActionTypes.GET_ALL_PRODUCTS:
      return {...state, dataState:ProductStateEnum.LOADING}; // ...state : dans le langage Javascript => creation d'une copie de l'objet ProductsState
    case ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductStateEnum.LOADED, products:action.payload};
    case ProductActionTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState:ProductStateEnum.ERROR, errorMessage:action.payload};
    default: return {...state};
  }
}
