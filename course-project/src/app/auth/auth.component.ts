import { Component, ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

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
      authObservable = this.authService.login(
        form.value.email,
        form.value.password
      );
    } else {
      authObservable = this.authService.signup(
        form.value.email,
        form.value.password
      );
    }

    authObservable.subscribe({
      next: (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error: (error) => {
        console.log(error);
        this.error = error;
        this.showErrorAlert(error);
        this.isLoading = false;
      },
    });

    form.reset();
  }

  onHandleError() {
    this.error = '';
  }

  showErrorAlert(error: string) {
    const alertComponent =
      this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
  }
}
