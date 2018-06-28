import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Food } from '../shared/model/food';
  
@Injectable()
export class FoodService {
  private _baseUrl = 'http://localhost:3000/';
  constructor(private http: Http) { }

  loadFoods(): Observable<Food[]> {
    return this.http.get(this._baseUrl + 'foods' + '?_sort=rating&_order=DESC').map(res => res.json());
  }

  rateFood(food: Food): Observable<Object> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put(this._baseUrl + 'foods' + '/' + food.id, food)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
