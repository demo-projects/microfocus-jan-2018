import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EditorService } from '../editor.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'mf-editor-actions',
  template: `
    <div class="actions">
      <span *ngIf="projectId">Project {{ projectId }}:</span>

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
export class EditorActionsComponent implements OnInit, OnChanges {
  @Input() projectId: any;
  @Input() elements: any;

  constructor(
    public editor: EditorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.projectId && changes.elements) {
      this.save();
    }
  }

  save() {
    this.editor.save()
      .subscribe((data) => this.router.navigate(['/editor', data.id]));
  }

}
