import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {CaloriesPipe} from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  pipes: [CaloriesPipe],
  templateUrl: 'app/meal-list.component.html'
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCalories: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }


  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
    ///line #29 gives you the parent of this method mealWasSelected that runs the line mealWasSelected(clickedMeal: Meal): void {console.log('parent', clickedMeal);
  }

  createMeal(description: string[]): void {

    this.mealList.push(
      new Meal(description[0], description[1] , parseInt(description[2]) , this.mealList.length)
    );
  }
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }
}
