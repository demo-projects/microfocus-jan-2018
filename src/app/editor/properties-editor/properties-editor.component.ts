import {
  Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, NgZone,
  ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { debounce } from 'lodash';
import { ElementProperties } from '../../defintions/element-properties';
import { TAGS } from '../../constants/elements.constants';
import { EditorService } from '../editor.service';

// let counter = 0;

@Component({
  selector: 'mf-properties-editor',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="properties" *ngIf="editor.selectedElement">
      <h4>Properties Editor</h4>
      <mf-property-field label="Tag">
        <select
          #tag
          [value]="editor.selectedElement.tag"
          (change)="editor.updateProperties({ tag: tag.value })">
          <option *ngFor="let tag of (TAGS | values | sort)" [value]="tag">{{ tag }}</option>
        </select>
      </mf-property-field>
      <mf-property-field label="Title">
        <input
          type="text"
          #input
          [value]="editor.selectedElement.title"
          (input)="editor.updateProperties({ title: input.value })"
        />
      </mf-property-field>
      <mf-property-field label="Color">
        <input
          #colorInput
          type="color"
          [value]="editor.selectedElement.color"
          (change)="editor.updateProperties({ color: colorInput.value })"
        />
      </mf-property-field>
      <mf-property-field label="Opacity">
        <input
          #opacityInput
          type="range"
          min="0"
          max="1"
          step="0.001"
          [value]="editor.selectedElement.opacity"
          (input)="editor.updateProperties({ opacity: opacityInput.value })"
        />
      </mf-property-field>
    </div>
    <h3 *mfUnless="editor.selectedElement">
      Please select an element in the working area
    </h3>
  `,
  styles: [
    `input {width: 350px }`,
    `.properties {
      display: flex;
      flex-direction: column;
    }`
  ]
})
export class PropertiesEditorComponent implements OnInit {
  TAGS = TAGS;

  constructor(public editor: EditorService) { }

  // constructor(private zone: NgZone, private applicationRef: ApplicationRef, private changeDetector: ChangeDetectorRef) { }

  // currentTime() {
  //   return new Date();
  // }
  ngOnInit() {
    // this.zone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     counter++;
    //     if (counter % 10 === 0) {
    //       this.changeDetector.detectChanges();
    //     }
    //   }, 200);
    // });
  }

}
