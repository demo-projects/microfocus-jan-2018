import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mf-properties-editor',
  template: `
    <div class="properties">
      <div class="field">
        <label>Title:</label>
        <input
          type="text"
          #input
          [value]="textTitle"
          (input)="setTitle.emit(input.value)"
        />
      </div>
      <div class="field">
        <label>Color:</label>
        <input
          #colorInput
          type="color"
          [value]="color"
          (change)="setColor.emit(colorInput.value)"
        />
      </div>
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
  @Input() textTitle: string;
  @Input() color: string;
  @Output() setColor = new EventEmitter<any>();
  @Output() setTitle = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
