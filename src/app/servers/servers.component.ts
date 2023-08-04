import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServers = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test server';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created. Name is ${this.serverName}`;
  }

  onUpdateServeerName(event: any) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
