import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TAGS } from '../../constants/elements.constants';
import { EditorService } from '../editor.service';

@Component({
  selector: 'mf-editor',
  template: `
    <div class="container">
    <mf-sidepanel title="Properties Editor" [panelLeft]="true">
      <mf-elements-navigator></mf-elements-navigator>
    </mf-sidepanel>
    <div class="working-area" (click)="editor.setSelectedIndex(null)">
        <mf-editor-actions
          [projectId]="editor.projectId"
          [elements]="editor.elements"
        ></mf-editor-actions>
        <div
          class="element"
          *ngFor="let element of editor.elements; let i = index"
          [class.element-selected]="editor.isSelected(i)"
          (mfClickAndStop)="editor.setSelectedIndex(i)"
          [style.color]="element.color"
          [style.opacity]="element.opacity">
          <ng-container [ngSwitch]="element.tag">
            <h1 *ngSwitchCase="TAGS.H1">
              {{ element.title }}
            </h1>
            <h2 *ngSwitchCase="TAGS.H2">
              {{ element.title }}
            </h2>
            <iframe
              *ngSwitchCase="TAGS.YOUTUBE"
              width="560" height="315" [src]="element.title | youtube"
              frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
    `.working-area {
        flex-grow: 1; position: relative; padding: 10px;
        background: url(assets/images/photoshop.png)
      }`,
    `.element { cursor: pointer }`,
    `.element-selected { box-shadow: inset 0 0 1px 1px rgba(0,0,0,0.5) }`
  ]
})
export class EditorComponent implements OnInit, OnDestroy {

  TAGS = TAGS;
  subscription;
  constructor(public editor: EditorService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      if (params.id) {
        this.editor.setCurrentProject(params.id);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
