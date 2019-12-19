import { Component, OnInit } from '@angular/core';

import { FakeService } from './../fake.service';
import { Fake } from '../fake';

@Component({
  selector: 'app-employee-retrieve',
  templateUrl: './employee-retrieve.component.html',
  styleUrls: ['./employee-retrieve.component.css']
})
export class EmployeeRetrieveComponent implements OnInit {

  fakeInfo: Array<Fake> = new Array();
  fakeRef: Fake;
  errorMsg: string;

  constructor(private fakeService: FakeService) { }

  ngOnInit() {
    this.fakeService.loadEmlpoyeeInfo().subscribe(data => this.fakeInfo = data);
  }

  checkById(empId: number) {
    this.fakeService.checkById(empId).subscribe(
      data => this.fakeRef = data,
      error => this.errorMsg = "Record not found."
    );
  }

  // loadData() {
  //   this.fakeService.loadEmlpoyeeInfo().subscribe(data => this.fakeInfo = data);
  // }

}
