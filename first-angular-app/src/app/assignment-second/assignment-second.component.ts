import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-second',
  templateUrl: './assignment-second.component.html',
  styleUrls: ['./assignment-second.component.scss'],
})
export class AssignmentSecondComponent implements OnInit {
  userName: string = '';
  constructor() {}

  ngOnInit(): void {}
  isNotValidUserName() {
    return this.userName.length === 0;
  }
  onClearUserName() {
    this.userName = '';
  }
}
