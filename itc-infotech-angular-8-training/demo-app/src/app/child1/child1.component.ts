import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() parentName: string;
  @Input() stdParentNames: Array<string> = new Array();

  msg: string = "This is a child component message.";
  @Output() ageOutput = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  getStdNamesLength() {
    return this.stdParentNames.length;
  }

  passValue(age:number){
    //pasing value from Child to Parent using @Output and Event Emitter
    this.ageOutput.emit(age);
  }
}
