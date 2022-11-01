import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assignment-two-databinding',
  templateUrl: './assignment-two-databinding.component.html',
  styleUrls: ['./assignment-two-databinding.component.scss'],
})
export class AssignmentTwoDatabindingComponent implements OnInit {
  constructor() {}

  username = '';

  ngOnInit(): void {}

  isUsernameEmpty() {
    return this.username === '';
  }

  resetUsername() {
    this.username = '';
  }
}
