import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  styleUrls: ['./servers.component.css'],
  template:
    `
<h3>Servers Component</h3>
<app-server></app-server>
<app-server></app-server>
<app-server></app-server>
`,
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
