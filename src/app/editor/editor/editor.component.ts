import { Component, OnInit } from '@angular/core';
import { ElementProperties } from '../../defintions/element-properties';
import { TAGS } from '../../constants/elements.constants';

@Component({
  selector: 'mf-editor',
  template: `
    <div class="container">
      <div class="working-area" (click)="setSelectedIndex(null)">
        <div
          class="element"
          *ngFor="let element of elements; let i = index"
          [class.element-selected]="isSelected(i)"
          (mfClickAndStop)="setSelectedIndex(i)"
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
        <mf-properties-editor
          *ngIf="selectedElementIndex !== null"
          [properties]="elements[selectedElementIndex]"
          (setProperties)="updateProperties($event)"
        ></mf-properties-editor>
        <h3 *ngIf="selectedElementIndex === null">
          Please select an element in the working area
        </h3>
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
  elements: ElementProperties[] = [
    {
      tag: TAGS.H1,
      title: 'Microfocus Angular Course',
      color: '#123ABC',
      opacity: 1
    },
    {
      tag: TAGS.H2,
      title: 'January 2018',
      color: '#456DEF',
      opacity: 1
    }
  ];
  selectedElementIndex = null;

  constructor() { }

  ngOnInit() {
  }

  setSelectedIndex(index) {
    this.selectedElementIndex = index;
  }

  isSelected(index) {
    return this.selectedElementIndex === index;
  }

  updateProperties(newProperties) {
    this.elements[this.selectedElementIndex] = {
      ...this.elements[this.selectedElementIndex],
      ...newProperties
    };
  }


}
