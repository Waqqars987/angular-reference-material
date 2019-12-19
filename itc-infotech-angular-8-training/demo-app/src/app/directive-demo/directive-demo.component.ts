import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {

  flag: boolean = false;
  stdInfo: string[] = ['Waqqar', 'Arnab', 'Subham', 'Amit', 'Jon', 'Nobody'];
  employees: Array<Employee>;
  styleRules: any = { 'color': 'blue', 'font-size': '24pt' };

  constructor() {
    this.employees = new Array();
    let emp1 = new Employee(1, "Waqqar", 12000, 23);
    let emp2 = new Employee(2, "Arnab", 12000, 24);
    let emp3 = new Employee(3, "Subham", 12000, 25);
    let emp4 = new Employee(4, "Amit", 12000, 26);
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
    this.employees.push(emp4);
  }

  ngOnInit() {
  }

}
