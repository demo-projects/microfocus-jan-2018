import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from './editor/editor.component';
import { PropertiesEditorComponent } from './properties-editor/properties-editor.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    EditorComponent,
    PropertiesEditorComponent
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule { }
