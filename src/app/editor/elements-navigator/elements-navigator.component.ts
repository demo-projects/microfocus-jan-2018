import { Component, OnInit } from '@angular/core';
import { TAGS } from '../../constants/elements.constants';
import { EditorService } from '../editor.service';

@Component({
  selector: 'mf-elements-navigator',
  template: `
    <div class="elements">
      <h4>Elements Navigator</h4>
      <a
        (click)="editor.addElement(tag)"
        *ngFor="let tag of (TAGS | values | sort)">{{ tag }}</a>
    </div>
  `,
  styles: [
    `.elements {
      display: flex;
      flex-direction: column;
    }`,
    `a {
      font-size: 14px;
      color: chocolate;
    }`
  ]
})
export class ElementsNavigatorComponent implements OnInit {
  TAGS = TAGS;
  constructor(public editor: EditorService) { }

  ngOnInit() {
  }

}
