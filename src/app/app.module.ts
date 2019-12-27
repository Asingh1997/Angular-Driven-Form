import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MyModelDrivenFormComponent } from './my-model-driven-form/my-model-driven-form.component';
import { MyTemplateDrivenFormComponent } from './my-template-driven-form/my-template-driven-form.component';


import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyModelDrivenFormComponent,
    MyTemplateDrivenFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [MyTemplateDrivenFormComponent, MyModelDrivenFormComponent]
})
export class AppModule { }
