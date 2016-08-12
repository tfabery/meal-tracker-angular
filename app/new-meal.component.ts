import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Create Meal:</h3>
    <form class="form-group">
      <div class="form-group">
        <input placeholder="Meal Name" class="input-lg" #newMealName>
      </div>
      <div class="form-group">
        <input placeholder="Details" class="input-lg" #newDetails>
      </div>
      <div class="form-group">
        <input placeholder="Calories" class="input-lg" #newCalories>
      </div>
      <div class="form-group">
        <button (click)="addMeal(newMealName, newDetails , newCalories)" class="btn-lg btn-success">Add</button>
      </div>
    </form>
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
