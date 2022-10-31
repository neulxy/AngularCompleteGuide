import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',   //attribute selector
  // selector: '.app-servers',    //class selector
  selector: 'app-servers', //element selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
}
