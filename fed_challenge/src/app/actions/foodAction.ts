import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store'
@Injectable()
export class FoodActions {
    static REQUEST_FOODS = 'REQUEST_FOODS';
    loadFoods(): Action {
        return {
            type: FoodActions.REQUEST_FOODS
        };
    }

    static LOAD_FOODS_SUCCESS = 'LOAD_FOODS_SUCCESS';
    loadFoodsSuccess(foods): Action {
        return {
            type: FoodActions.LOAD_FOODS_SUCCESS,
            payload: foods
        };
    }

    static RATE_FOOD_SUCCESS = 'RATE_FOOD_SUCCESS';
    rateFoodSuccess(food): Action {
        return {
            type: FoodActions.RATE_FOOD_SUCCESS,
            payload: food
        };
    }

}