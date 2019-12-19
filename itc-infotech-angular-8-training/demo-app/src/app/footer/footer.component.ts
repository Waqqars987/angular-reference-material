import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div><b>2019-20 &copy; {{msg}}</b></div>
  `,
  styles: ["b{color:red}"]
})
export class FooterComponent implements OnInit {

  msg: string = "by ABC Company";

  constructor() { }

  ngOnInit() {
  }

}
