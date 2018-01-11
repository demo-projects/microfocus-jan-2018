import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditorService } from '../editor.service';

@Component({
  selector: 'mf-editor-actions',
  template: `
    <div class="actions">
      <button (click)="save()">Save</button>
    </div>
  `,
  styles: [
    `.actions {
      display: flex;
      flex-direction: row;
      position: absolute;
      top: 5px;
      right: 5px;
      opacity: 0.2;
      padding: 5px;
      background: white;
      border: 1px solid black;
    }`,
    `.actions:hover {
      opacity: 0.9;
    }`
  ]
})
export class EditorActionsComponent implements OnInit {

  constructor(public editor: EditorService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.editor.save()
      .subscribe((data) => this.router.navigate(['/editor', data.id]));
  }

}
