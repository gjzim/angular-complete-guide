import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm!: NgForm;
  subscription!: Subscription;
  isEditing = false;
  editingItemIndex!: number;
  editingItem!: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.ingredientSelected.subscribe(
      (index) => {
        this.isEditing = true;
        this.editingItemIndex = index;
        this.editingItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editingItem.name,
          amount: this.editingItem.amount,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(
      form.value['name'],
      +form.value['amount']
    );

    if (this.isEditing) {
      this.shoppingListService.updateIngredient(
        this.editingItemIndex,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }

    this.isEditing = false;
    form.resetForm();
  }

  onDelete() {
    this.shoppingListService.removeIngredient(this.editingItemIndex);
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.isEditing = false;
    this.shoppingListService.formReset.next();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
