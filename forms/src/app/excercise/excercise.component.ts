import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.css']
})
export class ExcerciseComponent {
  @ViewChild('f') form!: NgForm;
  selectedSubscription = 'advanced'
  formValues = ''

  onSubmit() {
    this.formValues = JSON.stringify(this.form.value, null, 2);
  }
}
