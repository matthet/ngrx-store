import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable'
import { Action } from "@ngrx/store";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { FoodService } from "app/services/food.service";
import { FoodActions } from "app/actions/foodAction";

@Injectable()
export class FoodEffects {
    constructor(
        private actions$: Actions,
        private foodService: FoodService,
        private foodActions: FoodActions
    ) { }

    @Effect()
    loadFoods$: Observable<Action> = this.actions$
        .ofType('REQUEST_FOODS')
        .switchMap(action => this.foodService.loadFoods())
        .map((foods: any) => this.foodActions.loadFoodsSuccess(foods)
        );

    @Effect() rateFood$ = this.actions$
        .ofType('RATE_FOOD')
        .map(action => action.payload)
        .switchMap(food => this.foodService.rateFood(food))
        .map(food => this.foodActions.rateFoodSuccess(food));
}