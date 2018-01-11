import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor/editor.component';
import { PropertiesEditorComponent } from './properties-editor/properties-editor.component';
import { EditorService } from './editor.service';
import { ElementsNavigatorComponent } from './elements-navigator/elements-navigator.component';
import { EditorActionsComponent } from './editor-actions/editor-actions.component';

@NgModule({
  imports: [
    SharedModule,
    EditorRoutingModule
  ],
  declarations: [
    EditorComponent,
    PropertiesEditorComponent,
    ElementsNavigatorComponent,
    EditorActionsComponent
  ],
  exports: [
  ],
  providers: [
    EditorService
  ]
})
export class EditorModule { }
