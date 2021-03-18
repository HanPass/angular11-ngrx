import { Action } from '@ngrx/store';
import { Product } from '../model/product.model';

export enum ProductActionTypes{
  GET_ALL_PRODUCTS="[Products] Get All Products",
  GET_ALL_PRODUCTS_SUCCESS = "[PRoducts] Get All Products Success",
  GET_ALL_PRODUCTS_ERROR = "[PRoducts] Get All Products Error"
}

export class GetAllProductsActions implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any){}
}

export class GetAllProductsActionsSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){}
}

export class GetAllProductsActionsError implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string){}
}

export type ProductsActions = GetAllProductsActions | GetAllProductsActionsSuccess | GetAllProductsActionsError
