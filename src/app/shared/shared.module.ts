import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyFieldComponent } from './property-field/property-field.component';
import { ClickAndStopDirective } from './click-and-stop.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PropertyFieldComponent, ClickAndStopDirective],
  exports: [PropertyFieldComponent, ClickAndStopDirective]
})
export class SharedModule { }
