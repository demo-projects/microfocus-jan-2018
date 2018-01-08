import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mf-sidepanel',
  template: `
    <div class="panel" [class.open]="panelVisible" [class.left]="panelLeft">
      <a class="handle" (click)="togglePanel()">
        {{ panelVisible ? title : '' }}
      </a>
      <div class="main">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `.panel {
      height: 100%;
      display: flex;
      border-left: 1px solid grey;
      flex-direction: column;
    }`,
    `.panel.left {
      border-left: none;
      border-right: 1px solid grey;
    }`,
    `.handle {
      color: grey;
      background: lightgray;
      height: 22px;
      line-height: 22px;
      position: relative;
      padding-left: 20px;
    }`,
    `.panel.left .handle {
      padding-left: 5px;
    }`,
    `.handle::after {
      content: '<';
      position: absolute;
      left: 6px;
      top: -1px;
      z-index: 1;
    }`,
    `.panel.left .handle::after {
      content: '>';
      right: 6px;
      left: auto;
    }`,
    `.panel.open .handle::after {
      content: '>';
    }`,
    `.panel.left.open .handle::after {
      content: '<';
    }`,
    `.panel.open .main {
      width: 200px;
      opacity: 1;
    }`,
    `.main {
      padding: 10px;
      overflow: auto;
      width: 0;
      opacity: 0;
      transition: 150ms linear width;
    }`,
  ]
})
export class SidepanelComponent implements OnInit {
  panelVisible = true;
  @Input() panelLeft = false;
  @Input() title;

  constructor() { }

  ngOnInit() {
  }
  togglePanel() {
    this.panelVisible = !this.panelVisible;
  }

}
