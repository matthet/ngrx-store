import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy, Output } from '@angular/core';
import { Food } from 'app/shared/model/food';
import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from '@ngrx/store';
import { FoodActions } from "app/actions/foodAction";
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'food-section',
  templateUrl: './food-section.component.html',
  styleUrls: ['./food-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodSectionComponent implements OnInit {

  @Input()
  foods$: Observable<Food[]>;

  constructor(private store: Store<Food>, private foodActions: FoodActions) {}

  ngOnInit() {
    this.foods$ = Observable.combineLatest(
      this.store.select('food'),
      (foods: any) => {
        return foods.data ? foods.data : [];
      }
    );

    this.loadFoods();
  }

  loadFoods() {
    this.store.dispatch(this.foodActions.loadFoods());
  }

  rateFood(food: Food) {
    this.store.dispatch({ type: 'RATE_FOOD', payload: food });
  }

}
