import { FakeService } from './../fake.service';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {

  msg: string;
  msg1: string;
  constructor(private fakeService: FakeService) { }

  ngOnInit() {
  }

  callService() {
    let es = new EmployeeService();
    this.msg = es.display();
  }

  callFakeService() {
    this.msg1 = this.fakeService.display();
  }
}
