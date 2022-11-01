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
  serverName = 'Test Server Name';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2', 'Testserver 3'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
