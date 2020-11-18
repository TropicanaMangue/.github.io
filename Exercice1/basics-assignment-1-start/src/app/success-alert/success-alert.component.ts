import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p success> Success ! </p>',
  styles: ['[success] {background-color: green;}']
})
export class SuccessAlertComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
