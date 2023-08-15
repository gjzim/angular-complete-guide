import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
    genders = ['male', 'female'];
    signupForm!: FormGroup;
    forbiddenUsernames = ['Chris', 'Anna'];

    ngOnInit() {
        this.signupForm = new FormGroup({
            'userData': new FormGroup({
                'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
                'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmails]),
            }),
            'gender': new FormControl('male'),
            'hobbies': new FormArray([])
        });

        // this.signupForm.valueChanges.subscribe((value) => console.log(value));
        this.signupForm.statusChanges.subscribe((status) => console.log(status));
    }

    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        (this.signupForm.get('hobbies') as FormArray).push(control)
    }

    getHobbiesFormControls() {
        return (this.signupForm.get('hobbies') as FormArray).controls;
    }

    onSubmit() {
        console.log(this.signupForm);
    }

    forbiddenNames(control: FormControl): ValidationErrors | null {
        if (this.forbiddenUsernames.includes(control.value)) {
            return {'nameIsForbidden': true}
        }

        return null;
    }

    forbiddenEmails(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'test@test.com') {
                    resolve({'emailIsForbidden': true})
                } else {
                    resolve(null)
                }
            })
        })
    }
}
