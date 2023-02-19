import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { DynamicFieldComponent } from '../lib/dynamic-field/dynamic-field.component'
import { DynamicFormComponent } from '../lib/dynamic-form/dynamic-form.component';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { AngularMaterialModule } from 'src/app/angular-material.module';



@NgModule({
  declarations: [DynamicFormComponent, DynamicFieldComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [FormGroupDirective],
  exports: [DynamicFormComponent, DynamicFieldComponent]

})
export class DynamicFormModule { }
