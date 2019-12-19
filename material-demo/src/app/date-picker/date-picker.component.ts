import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date(2019, 11, 31);
  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  constructor() { }

  ngOnInit() {
  }

}
