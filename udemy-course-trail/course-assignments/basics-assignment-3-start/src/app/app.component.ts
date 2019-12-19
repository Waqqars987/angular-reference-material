import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .logger{
      color:white;
  }`]
})

export class AppComponent {

  display = false;
  logs = [];

  onDisplay() {
    this.display = !this.display;
    this.logs.push(new Date());
  }
}
