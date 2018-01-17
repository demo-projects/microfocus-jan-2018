import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PropertyFieldComponent } from './property-field/property-field.component';
import { ClickAndStopDirective } from './click-and-stop.directive';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { ValuesPipe } from './values.pipe';
import { SortPipe } from './sort.pipe';
import { YoutubePipe } from './youtube.pipe';
import { UnlessDirective } from './unless.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PropertyFieldComponent,
    ClickAndStopDirective,
    SidepanelComponent,
    ValuesPipe,
    SortPipe,
    YoutubePipe,
    UnlessDirective
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PropertyFieldComponent,
    ClickAndStopDirective,
    SidepanelComponent,
    ValuesPipe,
    SortPipe,
    YoutubePipe,
    UnlessDirective]
})
export class SharedModule { }
