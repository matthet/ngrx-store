import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodSectionComponent } from './food-section/food-section.component';
import { FoodListComponent } from './food-list/food-list.component';
import { routes } from './routes';
import { HomeComponent } from './home/home.component';
import { FoodService } from 'app/services/food.service';
import { StoreModule } from '@ngrx/store';
import { food } from './reducers/food';
import { EffectsModule } from '@ngrx/effects';
import { FoodEffects } from "app/effects/foodEffects";
import { FoodActions } from "app/actions/foodAction";


@NgModule({
  declarations: [
    AppComponent,
    FoodSectionComponent,
    FoodListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore({ food }),
    EffectsModule.run(FoodEffects),
  ],
  providers: [FoodService, FoodActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
