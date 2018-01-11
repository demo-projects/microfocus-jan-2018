import { Component, OnInit } from '@angular/core';
import { TAGS } from '../../constants/elements.constants';
import { EditorService } from '../editor.service';

@Component({
  selector: 'mf-editor',
  template: `
    <div class="container">
    <mf-sidepanel title="Properties Editor" panelLeft="true">
      <mf-elements-navigator></mf-elements-navigator>
    </mf-sidepanel>
    <div class="working-area" (click)="editor.setSelectedIndex(null)">
        <div
          class="element"
          *ngFor="let element of editor.elements; let i = index"
          [class.element-selected]="editor.isSelected(i)"
          (mfClickAndStop)="editor.setSelectedIndex(i)"
          [style.color]="element.color"
          [style.opacity]="element.opacity">
          <ng-container [ngSwitch]="element.tag">
            <h1 *ngSwitchCase="TAGS.H1">
              Welcome to {{ element.title }}!
            </h1>
            <h2 *ngSwitchCase="TAGS.H2">
              Welcome to {{ element.title }}!
            </h2>
          </ng-container>
        </div>
      </div>
      <mf-sidepanel title="Properties Editor">
        <mf-properties-editor></mf-properties-editor>
      </mf-sidepanel>
    </div>
  `,
  styles: [
    `.container { display: flex; height: 100% }`,
    `.working-area { flex-grow: 1 }`,
    `.element { cursor: pointer }`,
    `.element-selected { box-shadow: inset 0 0 1px 1px rgba(0,0,0,0.5) }`
  ]
})
export class EditorComponent implements OnInit {

  TAGS = TAGS;

  constructor(public editor: EditorService) { }

  ngOnInit() {
  }


}
