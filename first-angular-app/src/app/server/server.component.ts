import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  serveNum: number = 10;
  isOffline: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = '';
  servers: Array<string> = ['test1', 'test2'];
  isServerCreated: boolean = false;
  constructor() {
    setTimeout(() => {
      this.isOffline = true;
    }, 5000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server has been created successfully!' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
