import { Component } from '@angular/core';

@Component({
  selector: 'mf-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="container">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
  `,
  styles: [
    `.container { text-align: center }`
  ]
})
export class AppComponent {
  title = 'Microfocus Angular Course';
}
