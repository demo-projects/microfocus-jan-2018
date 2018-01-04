import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyFieldComponent } from './property-field/property-field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PropertyFieldComponent],
  exports: [PropertyFieldComponent]
})
export class SharedModule { }
