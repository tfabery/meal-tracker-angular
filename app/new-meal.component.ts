import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  templateUrl: 'app/new-meal.component.html'
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userMealName: HTMLInputElement, userDetails: HTMLInputElement , userCalories: HTMLInputElement){
    this.onSubmitNewMeal.emit([userMealName.value, userDetails.value , userCalories.value]);
    userMealName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
