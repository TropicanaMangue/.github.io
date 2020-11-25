import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('First test Recipe', 'It is a test', 'https://img.cuisineaz.com/660x660/2018-03-19/i136582-gratin-de-courgettes-au-four.jpeg'),
    new Recipe('Second test Recipe', 'It is a test', 'https://img.cuisineaz.com/660x660/2018-03-19/i136582-gratin-de-courgettes-au-four.jpeg'),
    new Recipe('Third test Recipe', 'It is a test', 'https://img.cuisineaz.com/660x660/2018-03-19/i136582-gratin-de-courgettes-au-four.jpeg')
  ];

  constructor() {
  }
}
