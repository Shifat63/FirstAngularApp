import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {CourseService} from "./course.service";
import { BindingComponent } from './binding/binding.component';
import { ComponentInputOutputPropertyComponent } from './component-input-output-property/component-input-output-property.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    BindingComponent,
    ComponentInputOutputPropertyComponent,
    NgContentComponent,
    DirectivesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
