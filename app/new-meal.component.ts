import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Create Meal:</h3>
    <input placeholder="Meal Name" class="col-sm-8 input-lg" #newMealName>
    <input placeholder="Details" class="col-sm-8 input-lg" #newDetails>
    <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
    <br>
    <button (click)="addMeal(newMealName, newDetails , newCalories)" class="btn-lg">Add</button>
  </div>
  `
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
