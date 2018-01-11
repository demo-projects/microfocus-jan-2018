import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from './editor/editor.component';
import { PropertiesEditorComponent } from './properties-editor/properties-editor.component';
import { EditorService } from './editor.service';
import { ElementsNavigatorComponent } from './elements-navigator/elements-navigator.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    EditorComponent,
    PropertiesEditorComponent,
    ElementsNavigatorComponent
  ],
  exports: [
    EditorComponent
  ],
  providers: [
    EditorService
  ]
})
export class EditorModule { }
