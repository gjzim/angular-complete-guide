import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  selectedIngredientIndex: number | undefined;
  ingredients: Ingredient[] = [];
  private igChangeSub!: Subscription;
  private formResetSub!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIndgredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients) => {
        this.ingredients = ingredients;
        this.selectedIngredientIndex = undefined;
      }
    );
    this.formResetSub = this.shoppingListService.formReset.subscribe(() => {
      this.selectedIngredientIndex = undefined;
    });
  }

  onIngredientSelect(index: number) {
    this.selectedIngredientIndex = index;
    this.shoppingListService.ingredientSelected.next(index);
  }

  isSelectedIngredient(index: number) {
    return (
      this.selectedIngredientIndex !== undefined &&
      this.selectedIngredientIndex === index
    );
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
    this.formResetSub.unsubscribe();
  }
}
