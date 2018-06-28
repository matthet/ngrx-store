import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnChanges {

  @Input()
  foods;
  
  constructor() {}

  @Output()
  rateFoodEvent = new EventEmitter();

  ngOnChanges(){
    Observable
    .interval(this.random(1000, 20000))
    .subscribe(x => { this.rateRandomFood() });
  }

  random(bottom, top) {
    return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
  }

  rateFood(food) {
    this.rateFoodEvent.emit(food);
  }

  rateRandomFood() {
    let food = this.foods[this.random(0, 9)];
    food.rating = this.random(1, 5);
    this.rateFoodEvent.emit(food);
  }
}
