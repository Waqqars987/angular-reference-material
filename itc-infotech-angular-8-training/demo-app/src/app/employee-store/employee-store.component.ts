import { FakeService } from './../fake.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-store',
  templateUrl: './employee-store.component.html',
  styleUrls: ['./employee-store.component.css']
})
export class EmployeeStoreComponent implements OnInit {

  result: string;
  error: string;

  empRef = new FormGroup({
    name: new FormControl("", Validators.required),
    salary: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required)
  })

  constructor(private fakeService: FakeService) { }

  ngOnInit() {
  }

  storeEmpInfo() {
    this.fakeService.storeEmpInfo(this.empRef.value).subscribe(
      data => this.result = data.id,
      error => this.error = "Could not store record!"
    );
  }
}