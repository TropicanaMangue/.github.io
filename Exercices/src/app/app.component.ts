import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText = false;
  counter = 0;
  logger = [];

  toggleDisplay() {
    this.displayText = !this.displayText;
    // this.logger[this.counter] = ++this.counter;
    this.logger.push(Date());
  }
}
