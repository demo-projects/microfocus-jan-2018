import { ElementProperties } from './defintions/element-properties';
import { Component } from '@angular/core';

@Component({
  selector: 'mf-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="container">
      <div class="working-area">
        <h1
          [style.color]="properties.color"
          [style.opacity]="properties.opacity">
          Welcome to {{ properties.title }}!
        </h1>
      </div>
      <mf-properties-editor
        [properties]="properties"
        (setProperties)="updateProperties($event)"
      ></mf-properties-editor>
    </div>
  `,
  styles: [
    `.container { display: flex; height: 100% }`,
    `.working-area { flex-grow: 1 }`
  ]
})
export class AppComponent {
  properties: ElementProperties = {
    title: 'Microfocus Angular Course',
    color: '#123ABC',
    opacity: 1
  };

  updateProperties(newProperties) {
    this.properties = {
      ...this.properties,
      ...newProperties
    };
  }

}
