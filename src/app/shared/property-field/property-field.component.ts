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
    `label { flex-basis: 100px; flex-grow: 0}`
  ]
})
export class PropertyFieldComponent implements OnInit {
  @Input() label;
  constructor() { }

  ngOnInit() {
  }

}
