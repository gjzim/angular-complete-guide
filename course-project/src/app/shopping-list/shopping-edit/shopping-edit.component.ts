import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true })
  nameInputRef!: ElementRef<HTMLInputElement>;

  @ViewChild('amountInput', { static: true })
  amountInputRef!: ElementRef<HTMLInputElement>;

  constructor(private shoppingListService: ShoppingListService) {}

  onIngredientCreate(event: Event) {
    event.preventDefault();
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        +this.amountInputRef.nativeElement.value
      )
    );
  }
}
