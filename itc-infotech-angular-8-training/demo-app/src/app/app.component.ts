import { Component, ViewChild, OnInit } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name: string = "Waz";
  stdName: Array<string> = new Array();
  @ViewChild(Child1Component, { static: true }) childRef: Child1Component;
  childMsg: string;
  childAge: number;
  stdCount: number;

  ngOnInit() {
    //accessing child property via ViewChild()
    this.childMsg = this.childRef.msg;
  }

  addName(stdName: string) {
    this.stdName.push(stdName);
    this.stdCount = this.childRef.getStdNamesLength();
  }
}
