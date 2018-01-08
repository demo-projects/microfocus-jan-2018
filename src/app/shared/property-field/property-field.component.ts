import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mf-property-field',
  template: `
  <div class="field">
    <label>{{ label }}:</label>
    <ng-content></ng-content>
  </div>
  `,
  styles: [
    `.field { display: flex; margin-bottom: 20px }`,
    `label {
      flex-grow: 0;
      flex-basis: 70px;
      flex-shrink: 0;
      font-size: 14px;
      color: chocolate;
    }`
  ]
})
export class PropertyFieldComponent implements OnInit {
  @Input() label;
  constructor() { }

  ngOnInit() {
  }

  
}
