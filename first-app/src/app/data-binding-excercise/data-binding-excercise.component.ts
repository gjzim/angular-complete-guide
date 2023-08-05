import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-excercise',
  templateUrl: './data-binding-excercise.component.html',
})
export class DataBindingExcercise {
  username = '';

  onUserNameReset() {
    this.username = '';
  }
}
