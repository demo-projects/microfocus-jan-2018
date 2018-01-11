import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf-page-not-found',
  template: `
    <h1>
      Page not found
    </h1>
    <img width="100px" src="https://media1.tenor.com/images/d9d8d6e271903eea491db62f152967bc/tenor.gif?itemid=5770190"/>
  `,
  styles: [
    `h1 {
      margin: 100px;
      text-align: center;
    }`,
    `img {text-align: center;}`
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
