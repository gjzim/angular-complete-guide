import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-excercise',
  templateUrl: './reactive-form-excercise.component.html'
})
export class ReactiveFormExcerciseComponent implements OnInit{
  projectForm!: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, Validators.required, this.isValidProjectNames),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical', Validators.required),
    });
  }

  isValidProjectNames(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(control.value === 'Test') {
          resolve({
            'nameIsForbidden': true
          });
        } else {
          resolve(null)
        }
      }, 400)
    })
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
