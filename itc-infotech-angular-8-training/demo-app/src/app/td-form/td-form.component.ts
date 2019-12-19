import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  msg: string;
  constructor() { }

  ngOnInit() {
  }

  checkUser(loginRef: { user: string; pass: string; }) {
    if (loginRef.user === "Waz" && loginRef.pass === "123") {
      this.msg = "Successfully logged in";
    } else {
      this.msg = "Failure try once again";
    }
  }
}
