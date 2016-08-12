import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div>
      <h3>Edit Meal Name: </h3>
      <input [(ngModel)]="meal.name" class="input-lg"/>
    </div>
    <div>
      <h3>Edit Details: </h3>
      <input [(ngModel)]="meal.details" class="input-lg"/>
    </div>
    <div>
      <h3>Edit Calories: </h3>
      <input [(ngModel)]="meal.calories" class="input-lg"/>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
