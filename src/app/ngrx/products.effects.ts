import { Injectable } from '@angular/core';
import { ProductsService } from '../services/product.service'
import { Actions , createEffect, ofType} from '@ngrx/effects';
import { Observable, merge, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { ProductActionTypes, ProductsActions, GetAllProductsActionsSuccess, GetAllProductsActionsError } from './products.actions';

@Injectable()
export class ProductsEffects{

  constructor(private productsService:ProductsService, private effectActions:Actions){
  }

  getAllProductsEffect:Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductActionTypes.GET_ALL_PRODUCTS),
      mergeMap((action) => {
        return this.productsService.getAllProducts().pipe(
          map((products) => new GetAllProductsActionsSuccess(products)),
          catchError((err) => of(new GetAllProductsActionsError(err)))
        )
      })
    )
  );

}
