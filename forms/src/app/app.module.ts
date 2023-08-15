import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {ExcerciseComponent} from './excercise/excercise.component';
import {LessonComponent} from './lesson/lesson.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import { ReactiveFormExcerciseComponent } from './reactive-form-excercise/reactive-form-excercise.component';

@NgModule({
    declarations: [
        AppComponent,
        ExcerciseComponent,
        LessonComponent,
        ReactiveFormComponent,
        ReactiveFormExcerciseComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
