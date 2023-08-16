import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {Subject} from "rxjs";

export class RecipeService {
  recipesChanged: Subject<Recipe[]> = new Subject();

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'A tasty burger.',
      'https://hips.hearstapps.com/hmg-prod/images/turkey-burger-index-64873e8770b34.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Buns', 2)]
    ),
    new Recipe(
      'Pizza',
      'Newyork style pizza.',
      'https://www.biggerbolderbaking.com/wp-content/uploads/2021/02/New-York-Style-Pizza-Thumbnail1-scaled.jpg',
      [
        new Ingredient('Pizza Dough', 1),
        new Ingredient('Meat slices', 3),
        new Ingredient('Tomato sauce', 1),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
