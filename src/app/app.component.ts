import { ElementProperties } from './defintions/element-properties';
import { Component } from '@angular/core';

@Component({
  selector: 'mf-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="container">
      <div class="working-area" (click)="setSelectedIndex(null)">
        <div
          class="element"
          *ngFor="let element of elements; let i = index"
          [class.element-selected]="isSelected(i)"
          (mfClickAndStop)="setSelectedIndex(i)">
          <h1
            [style.color]="element.color"
            [style.opacity]="element.opacity">
            Welcome to {{ element.title }}!
          </h1>
        </div>
      </div>
      <mf-properties-editor
        *ngIf="selectedElementIndex !== null"
        [properties]="elements[selectedElementIndex]"
        (setProperties)="updateProperties($event)"
      ></mf-properties-editor>
    </div>
  `,
  styles: [
    `.container { display: flex; height: 100% }`,
    `.working-area { flex-grow: 1 }`,
    `.element { cursor: pointer }`,
    `.element-selected { box-shadow: inset 0 0 1px 1px rgba(0,0,0,0.5) }`
  ]
})
export class AppComponent {
  elements: ElementProperties[] = [
    {
      title: 'Microfocus Angular Course',
      color: '#123ABC',
      opacity: 1
    },
    {
      title: 'January 2018',
      color: '#456DEF',
      opacity: 1
    }
  ];
  selectedElementIndex = null;

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
