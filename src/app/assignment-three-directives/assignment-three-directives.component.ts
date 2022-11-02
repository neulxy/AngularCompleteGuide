import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assignment-three-directives',
  templateUrl: './assignment-three-directives.component.html',
  styleUrls: ['./assignment-three-directives.component.scss'],
})
export class AssignmentThreeDirectivesComponent implements OnInit {
  constructor() {}
  clickLogs: any[] = [];
  index = 0;

  displayContent = true;

  toggleAndLogBtnClick() {
    this.displayContent = !this.displayContent;
    this.clickLogs.push(new Date());
  }

  getStyle(logIndex: any) {
    if (logIndex >= 5) {
      return { backgroundColor: 'blue' };
    }
    return null;
  }

  ngOnInit(): void {}
}
