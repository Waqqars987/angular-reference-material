import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'demo-app';
  id: number = 200;
  name: string = "Waz";
  salary: number = 20000;

  display(): string {
    return "Welcome to Angular " + this.name;
  }

  constructor() { }

  ngOnInit() {
  }

}
