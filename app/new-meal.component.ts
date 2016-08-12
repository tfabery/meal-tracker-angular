import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './task.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Create Meal:</h3>
    <input placeholder="Meal Name" class="col-sm-8 input-lg" #newMealName>
    <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
    <button (click)="addMeal(newMealName, newCalories)" class="btn-lg">Add</button>
  </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userMealName: HTMLInputElement, userCalories: HTMLInputElement){
    this.onSubmitNewMeal.emit([userMealName.value, userCalories.value]);
    userMealName.value = "";
    userCalories.value = "";
  }
}
