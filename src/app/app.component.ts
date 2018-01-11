import { Component } from '@angular/core';

@Component({
  selector: 'mf-root',
  template: `
    <mf-header></mf-header>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class AppComponent {
}
