import { ElementProperties } from './../defintions/element-properties';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { debounce } from 'lodash';
import { TAGS } from '../constants/elements.constants';
import { values } from 'lodash';

@Component({
  selector: 'mf-properties-editor',
  template: `
    <div class="properties">
      <h4>Properties Editor</h4>
      <mf-property-field label="Tag">
        <select
          #tag
          [value]="properties.tag"
          (change)="setProperties.emit({ tag: tag.value })">
          <option *ngFor="let tag of TAGS" [value]="tag">{{ tag }}</option>
        </select>
      </mf-property-field>
      <mf-property-field label="Title">
        <input
          type="text"
          #input
          [value]="properties.title"
          (input)="setProperties.emit({ title: input.value })"
        />
      </mf-property-field>
      <mf-property-field label="Color">
        <input
          #colorInput
          type="color"
          [value]="properties.color"
          (change)="setProperties.emit({ color: colorInput.value })"
        />
      </mf-property-field>
      <mf-property-field label="Opacity">
        <input
          #opacityInput
          type="range"
          min="0"
          max="1"
          step="0.001"
          [value]="properties.opacity"
          (input)="setProperties.emit({ opacity: opacityInput.value })"
        />
      </mf-property-field>
    </div>
  `,
  styles: [
    `:host { border-left: 1px solid grey; padding: 10px}`,
    `input {width: 350px }`,
    `.properties {
      display: flex;
      flex-direction: column;
    }`
  ]
})
export class PropertiesEditorComponent implements OnInit {
  @Input() properties: ElementProperties;
  @Output() setProperties = new EventEmitter<any>();
  TAGS = values(TAGS);
  constructor() { }

  ngOnInit() {
  }

}
