import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyFieldComponent } from './property-field/property-field.component';
import { ClickAndStopDirective } from './click-and-stop.directive';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { ValuesPipe } from './values.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PropertyFieldComponent,
    ClickAndStopDirective,
    SidepanelComponent,
    ValuesPipe,
    SortPipe
  ],
  exports: [
    CommonModule,
    PropertyFieldComponent,
    ClickAndStopDirective,
    SidepanelComponent,
    ValuesPipe,
    SortPipe]
})
export class SharedModule { }
