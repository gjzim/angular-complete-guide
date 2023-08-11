import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent {
  @Input() recipe!: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddToShoppingList(event: Event) {
    event.preventDefault();

    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
