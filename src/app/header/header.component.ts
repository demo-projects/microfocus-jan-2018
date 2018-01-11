import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf-header',
  template: `
    <nav class="header">
      <a routerLink="/editor">Microfocus</a>
      <a routerLink="/login">Login</a>
    </nav>
  `,
  styles: [
    `a {
      text-decoration: none;
    }`,
    `a.active {
      text-decoration: underline;
      font-weight: bold;
    }`,
    `.header {
      height: 40px;
      padding: 10px;
      border-bottom: 1px solid grey;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background: #DDD;
    }`
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
