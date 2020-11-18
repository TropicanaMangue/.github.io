import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server were created !';
  serverName = 'TestServer';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'Server ' + this.serverName + 'was created !';
    this.serverCreated = true;
  }

  onUpdateServerName(event: any): void {
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
