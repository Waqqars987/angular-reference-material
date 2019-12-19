import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  fName: string = "Waz";
  desg: string = "Tester";
  flag: boolean = false;
  age: number = 25;
  salary: number = 16000;

  result: number;

  constructor() { }

  ngOnInit() {
  }

  fun() {
    this.age = 34;
  }

  calculate(num1: number, num2: number, operation: string) {
    this.result = operation === '+' ? +num1 + +num2 : +num1 - +num2;
  }

}
