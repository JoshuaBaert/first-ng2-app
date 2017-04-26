import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*styles: [`
h3 {
  color: dodgerblue;
}
`]*/
})
export class AppComponent {

  serverId = 10;
  serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'test server';
  serverCreated = false;

  constructor() {
    setTimeout(() => {this.allowNewServer = true},2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created.';
    this.serverCreated = true;
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
    this.serverCreated = false;
  }

}
