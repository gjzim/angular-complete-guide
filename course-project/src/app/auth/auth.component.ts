import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {Observable} from "rxjs";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error = '';

    constructor(private authService: AuthService) {
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (form.invalid) {
            return;
        }

        this.isLoading = true;
        this.error = '';
        let authObservable: Observable<AuthResponseData>;

        if (this.isLoginMode) {
            authObservable = this.authService.login(form.value.email, form.value.password)
        } else {
            authObservable = this.authService.signup(form.value.email, form.value.password)
        }

        authObservable.subscribe({
            next: (resData) => {
                console.log(resData);
                this.isLoading = false;
            },
            error: (error) => {
                console.log(error);
                this.error = error;
                this.isLoading = false;
            },
        })

        form.reset();
    }
}
