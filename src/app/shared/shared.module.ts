import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyFieldComponent } from './property-field/property-field.component';
import { ClickAndStopDirective } from './click-and-stop.directive';
import { SidepanelComponent } from './sidepanel/sidepanel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PropertyFieldComponent,
    ClickAndStopDirective,
    SidepanelComponent
  ],
  exports: [
    CommonModule,
    PropertyFieldComponent,
    ClickAndStopDirective,
    SidepanelComponent]
})
export class SharedModule { }
