import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true })
  nameInputRef!: ElementRef<HTMLInputElement>;

  @ViewChild('amountInput', { static: true })
  amountInputRef!: ElementRef<HTMLInputElement>;

  @Output() createIngredient = new EventEmitter<Ingredient>();

  onIngredientCreate(event: Event) {
    event.preventDefault();
    this.createIngredient.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        +this.amountInputRef.nativeElement.value
      )
    );
  }
}
