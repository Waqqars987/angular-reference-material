import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-md-form',
  templateUrl: './md-form.component.html',
  styleUrls: ['./md-form.component.css']
})
export class MdFormComponent implements OnInit {

  loginRef = new FormGroup({
    userName: new FormControl('', [Validators.required,Validators.minLength(3)]),
    pass: new FormControl('', [Validators.required])
  });
  constructor() { }

  ngOnInit() {
  }

  checkUser() {
    console.log(this.loginRef)
    console.log(this.loginRef.value);
    console.log(this.loginRef.get("userName").value);
    console.log(this.loginRef.get("pass").value);
  }

}