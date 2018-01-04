import { Component } from '@angular/core';

@Component({
  selector: 'mf-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="container">
      <div class="working-area">
        <h1 [style.color]="color">
          Welcome to {{ title }}!
        </h1>
      </div>
      <mf-properties-editor
        [textTitle]="title"
        [color]="color"
        (setTitle)="setTitle($event)"
        (setColor)="setColor($event)"
      ></mf-properties-editor>
    </div>
  `,
  styles: [
    `.container { display: flex; height: 100% }`,
    `.working-area { flex-grow: 1 }`
  ]
})
export class AppComponent {
  title = 'Microfocus Angular Course';
  color = '#123ABC';

  setTitle(value) {
    this.title = value;
  }

  setColor(value) {
    this.color = value;
  }
}
